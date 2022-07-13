import axios from 'axios';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function ArticlesPage() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const companyName = location.state.companyName;
    useEffect(() => {
      console.log("SHOULD ONLY DISPLAY ONCE")
      getData(companyName);
    }, []);
    
    return (
        <div className="ArticlesPage">
          <header className="App-header">
          <h1>This is the Articles Page!</h1>
          </header>
        </div>
    );
  }

function getData(input) {
    axios({
        method: "GET",
        url:"/article/",
        params: {
            companyName: input
        }
      }).then((response)=>{
        const data = response.data
        const convertedData = convertData(data)
        console.log(convertedData[0].title)
        console.log(convertedData[0].author)
        console.log(convertedData[0].time)
        console.log(convertedData[0].completeLink)
        console.log(convertedData[0].imgSource)       
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })}

function convertData(data) {
    var parsed = JSON.parse(data);
    return parsed
    
}



  // function PostSubmitPage(props) {
  //   const [data, setData] = useState([]);
  //   const location = useLocation();
  //   const companyName = location.state.companyName;
  //   useEffect(() => {
  //     console.log("I fire once");
  //     getData(companyName);
  //   }, []);

  export default ArticlesPage;
