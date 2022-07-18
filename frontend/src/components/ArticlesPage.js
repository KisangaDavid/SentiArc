import axios from 'axios';
import { useLocation } from "react-router-dom";
import AppNavbar from './AppNavbar'
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import loading from './loading.gif';

function ArticlesPage() {
    const [dataReturned, setDataReturned] = useState(false);
    const [listOfArticles, setListOfArticles] = useState([]);
    const location = useLocation();
    const companyName = location.state.companyName;
    const censorMode = location.state.censorMode;
    useEffect(() => {
      getData(companyName);
    }, []);

    async function getData(input) {
      const response = await axios({method: "GET", url:"/article/", params: {requestType: "articles", companyName: input }});
      var convertedArticles = convertData(response.data)
      const listOfArticleCards = convertedArticles.map((element, index) =>
      <ArticleCard key={index} title={element.title} author={element.author} time={element.time} fullLink={element.completeLink} imgSource = {element.imgSource}/>)
      setListOfArticles(listOfArticleCards);
      console.log(listOfArticleCards);
      setDataReturned(true);
    }
    
    function convertData(data) {
        var parsed = JSON.parse(data);
        return parsed  
    }
    
    return (
      <div>
      <AppNavbar companyName = {companyName} censorMode = {censorMode} />
        <div className="ArticlesPage">
          <h2 class="pagesHeader">Top articles about {companyName}</h2>
          <header className="App-header">
          {!dataReturned && <div><p style= {{color: "white", textAlign: "center"}}>Loading...</p><img style={{width: "8rem", height: "8rem"}} src= {loading} />  </div>}
          {dataReturned && listOfArticles}
          </header>
        </div>
        </div>
    );
  }

  export default ArticlesPage;
