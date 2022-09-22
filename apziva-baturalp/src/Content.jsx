import React, {setState, useEffect} from 'react';
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

import Results from "./Results.jsx"
import StackResults from "./StackResults.jsx"
import "./Context.css"

export default class Content extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.githubRender = this.githubRender.bind(this);
        this.stackoverflowRender = this.stackoverflowRender.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            gitFetched: false,
            data: [],
            stackData: [],
            result: ""
        };
    }

    


    handleSubmit = (event) => {
        event.preventDefault();
        const username = new FormData(event.target);
        const searchUser = username.get("name");

        document.getElementById("myForm").reset();

        this.githubRender(searchUser);
        this.stackoverflowRender(searchUser);


        //console.log(this.githubRender(searchUser));
        //console.log(this.stackoverflowRender(searchUser));
        

    }
    
    githubRender = async (searchUser) => {
        const octokit = new Octokit({
            auth: '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'
          })
          
        const myRequest = 'GET /users/'+searchUser;
        const response = await octokit.request(myRequest);
        this.setState({data: response.data, result: response.data.login});
        
        
    }

    stackoverflowRender = async(searchUser) => {
        const key = 'SGhCyFY7o)D30Q)ZbArsvg((';
        const url = 'https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&inname='+searchUser+'&site=stackoverflow&key='+key;
        
        const response = await fetch(url);
        const stackRes = await response.json();
        console.log(stackRes.items[0]);
        this.setState({stackData: stackRes.items[0]});
        //return stackRes;
    }
    
    handleReset = () => {
        this.setState({gitFetched: false, data: [], stackData: [], result: ""});
    }

    render(){
        return(
    <div id="container-main">
    <div id="textbox">
    <h1 id="title">Retrieve Github and StackOverflow Information of the Candidate </h1>
    <p id="desc-1">Enter the actual username to get correct data. No spaces are allowed. If there is not update on the screen, then you can understand that the username is not registered on Github. </p>
    <p id="desc-2">Bonus: If the username is same for Stack Exchange and Github, you can also check the Stack Exchange Information of the user under the Github Data. </p>
    </div>
    <form onSubmit={this.handleSubmit} id="myForm">
        <label>
            <input class="form-control" id="text" type="text" name="name" placeholder="Username" pattern="^\S+$" required/>
        </label>
        <input id="buton-1" class="btn btn-outline-dark" type="submit" value="Submit" />
        <input id="buton-2" class="btn btn-outline-danger" type="reset" value="Reset" onClick={this.handleReset} />
    </form>
    {this.state.result ?
        <div><Results results={this.state.data} /><StackResults stackresults={this.state.stackData}/></div>: "Not Fetched from Github yet."
    }
    </div>
        );
    
        }
    }