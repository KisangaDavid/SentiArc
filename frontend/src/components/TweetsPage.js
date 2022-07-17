import AppNavbar from './AppNavbar';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {TwitterTweetEmbed} from 'react-twitter-embed';

//english tweets only, mentions inputed company, try no retweets?
function TweetsPage() {
    const location = useLocation();
    const companyName = location.state.companyName;
    const [dataReturned, setDataReturned] = useState(false);
    const [listOfTweets, setListOfTweets] = useState([]);
    useEffect(() => {
      getData(companyName);
    }, []);

    async function getData(input) {
      const response = await axios({method: "GET", url:"/article/", params: { requestType: "tweets", companyName: input }});
      const listOfTweets = response.data.data.map((element, index) =>
      <TwitterTweetEmbed class="embeddedTweet" options={{theme: "dark", align: "center"}} key={index} tweetId={element.id}/>)
      setListOfTweets(listOfTweets);
      console.log(listOfTweets)
      setDataReturned(true);
      
    }
    
    return (
      <div>
      <AppNavbar companyName = {companyName} />
        <div className="TweetsPage">
          <h2 class="pagesHeader">Top Tweets mentioning {companyName} in the last week</h2>
          <div className = "TweetsPageBody">
          {!dataReturned && <p>loading...</p>}
          {dataReturned && listOfTweets}
          </div>
        </div>
        </div>
    );
  }



  export default TweetsPage;
