import {useState} from 'react'
import "./Context.css"

const Results = ({results}) =>{
    console.log(results.login)
    return(
    <div id="container">
    {results.login ? 
    <div id="github-data">
    <h1>{results.login}'s Data from Github</h1>
    <img src={results.avatar_url} id="img-gh" alt="profile-pic"></img>
    <h1 id="bio">{results.bio ? <p>{results.bio}</p>:<p>Bio is not shared.</p>}</h1>
    <h1 id="blog-url">{results.blog ? <p>Blog url: {results.blog}</p>:<p>Blog url is not shared.</p>}</h1>
    <h1 id="company">{results.company ? <p>Company: {results.company}</p>:<p>Company is not shared.</p>}</h1>
    <h1 id="created-account-at"><p>Created account at: {results.created_at}.</p></h1>
    <h1 id="email">{results.email ? <p>Email address: {results.email}</p>:<p>Email address is not shared.</p>}</h1>
    <h1 id="follower-count">Follower Count: {results.followers}</h1>
    <h1 id="following">Following {results.following} people.</h1>
    <h1 id="hireable">{results.hireable ? <p>He is hireable.</p>:<p>He is not hireable.</p>}</h1>
    <h1 id="location">{results.location ? <p>Location: {results.location}</p>:<p>Location not shared.</p>}</h1>
    <h1 id="organizations">{results.organizations ? <p>Organizations are {results.organizations}</p>:<p>No Organizations related.</p>}</h1>
    <h1 id="public-repos">Public Repo Count: {results.public_repos}</h1>
    <h1 id="private-repos">{results.total_private_repos ? <p>Private Repo Count: {results.total_private_repos}</p>:<p>Private Repo Count: 0</p>}</h1>
    <h1 id="twitter-username">{results.twitter_username ? <p>Twitter username is {results.twitter_username}</p>: <p>Not using Twitter.</p>}</h1>
    </div>
    :<h1>No</h1>    }
    </div>
    );
}

export default Results;