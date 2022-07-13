import axios from 'axios';
import { useLocation } from "react-router-dom";
import AppNavbar from './AppNavbar'
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

function ArticlesPage() {
    const [dataReturned, setDataReturned] = useState(false);
    const [listOfArticles, setListOfArticles] = useState([]);
    const location = useLocation();
    const companyName = location.state.companyName;
    useEffect(() => {
      getData(companyName);
    }, []);

    async function getData(input) {
      const response = await axios({method: "GET", url:"/article/", params: { companyName: input }});
      var convertedArticles = convertData(response.data)
      setListOfArticles(convertedArticles);
      setDataReturned(true);
    }
    
    function convertData(data) {
        var parsed = JSON.parse(data);
        return parsed  
    }
    
    return (
        <div className="ArticlesPage">
          <AppNavbar companyName = {companyName} />
          <h2>Top stories about {companyName}</h2>
          <header className="App-header">
          {!dataReturned && <p>loading...</p>}
          {dataReturned && <ArticleCard title={listOfArticles[0].title} author={listOfArticles[0].author} time={listOfArticles[0].time} completeLink={listOfArticles[0].completeLink} imgSource={listOfArticles[0].imgSource}/>}
          </header>
        </div>
    );
  }



// function getData(input) {
//   axios({
//       method: "GET",
//       url:"/article/",
//       params: {
//           companyName: input
//       }
//     }).then((response)=>{
//       const data = response.data
//       const convertedData = convertData(data)
//       return convertedData;       
//     }).catch((error) => {
//       if (error.response) {
//         console.log(error.response);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//         }
//     })}

  // function PostSubmitPage(props) {
  //   const [data, setData] = useState([]);
  //   const location = useLocation();
  //   const companyName = location.state.companyName;
  //   useEffect(() => {
  //     console.log("I fire once");
  //     getData(companyName);
  //   }, []);

  export default ArticlesPage;
