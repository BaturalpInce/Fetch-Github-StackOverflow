import "./StackResults.css";

const StackResults = ({stackresults}) => {
    var cont = 0;
    if(stackresults!=null){
        cont = 1;
    }
    console.log(cont);
    return(
        <div id="container-stack">
        {(cont == 1) ?
        <div id="stackoverflow-data">
        <h1>Data from Stack Exchange</h1>
        <img src={stackresults.profile_image} id="img-so" alt="StackOverflow"></img>
        <h1>Display Name: {stackresults.display_name}</h1>
        <h1>Accept Rate: {stackresults.accept_rate}</h1>
        <h1>Location: {stackresults.location}</h1>
        <h1>Total Reputation: {stackresults.reputation}</h1>
        <h1>Reputation earned today: {stackresults.reputation_change_day}</h1>
        <h1>Reputation earned this week: {stackresults.reputation_change_week}</h1>
        <h1>Reputation earned this month: {stackresults.reputation_change_month}</h1>
        <h1>Reputation earned this year: {stackresults.reputation_change_year}</h1>
        <h1>Website URL: {stackresults.website_url}</h1>
        <h1>StackOverflow Link: {stackresults.link}</h1>
        </div>
        :<h1 id="stack-error">StackOverflow No data found for this user.</h1>}
        </div>
    )
}

export default StackResults;