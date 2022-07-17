import { useLocation } from "react-router-dom";
import AppNavbar from './AppNavbar';
import React from 'react';



function PostSubmitPage(props) {
  const location = useLocation();
  const companyName = location.state.companyName;

  
    return (
        <div className="PostSubmitPage">
          <AppNavbar companyName={companyName}/>
          <header className="App-header">
          <h1>This is the Post Submit page! Company Submitted: {companyName} </h1>
          </header>
        </div>
    );
  }


  


/*  useEffect(() => {
  console.log("I fire once");
  getData(companyName);
}, []); 

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
    
} */
  export default PostSubmitPage;