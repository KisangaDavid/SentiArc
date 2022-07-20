import AppNavbar from './AppNavbar';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import TrendCard from './TrendCard.js';
import axios from 'axios';
import loading from './loading.gif'
import LineGraph from './LineGraph'

// companyName gets smooshed together sometimes, FIX!
function TrendsPage() { 
    const location = useLocation();
    const companyName = location.state.companyName;
    const censorMode = location.state.censorMode;
    const [dataReturned, setDataReturned] = useState(false);
    const [trendCards, setTrendCards] = useState([]);
    const [graphPopData, setGraphPopData] = useState([])
    const [graphXAxisData, setGraphXAxisData] = useState([])
    useEffect(() => {
      getData(companyName);
    }, []);
    
    async function getData(input) {
      const response = await axios({method: "GET", url:"/article/", params: {requestType: "trends", companyName: input }});
      var convertedTrends = convertData(response.data)
      const weeklyTrendCard = <TrendCard trendTitle = {"Weekly Change"} trendStat = {convertedTrends.weeklyChange} />
      const monthlyTrendCard = <TrendCard trendTitle = {"Monthly Change"} trendStat = {convertedTrends.monthlyChange} />
      const yearlyTrendCard = <TrendCard trendTitle = {"Yearly Change"} trendStat = {convertedTrends.yearlyChange} />
      const listOfTrendCards = [weeklyTrendCard, monthlyTrendCard, yearlyTrendCard]
      setTrendCards(listOfTrendCards);
      setGraphPopData(convertedTrends.listOfPopScores)
      setGraphXAxisData(convertedTrends.xAxisData)
      console.log(listOfTrendCards);
      setDataReturned(true);
    }

    function convertData(data) {
      var parsed = JSON.parse(data);
      return parsed  
  }

    return (
      <div>
        <AppNavbar companyName = {companyName} censorMode = {censorMode} /> 
        <div className="TrendsPage">
        <h2 class="pagesHeader">Public interest in {companyName} over time</h2>
        <LineGraph companyName = {companyName} xAxisData = {graphXAxisData} listOfPopScores = {graphPopData} />
        
            {!dataReturned && <div><p style= {{color: "white", textAlign: "center"}}>Loading...</p><img style={{width: "8rem", height: "8rem"}} src= {loading} />  </div>}
            <div class="TrendsPageBody">
            {dataReturned && trendCards}
            </div>
        </div>
      </div>
    );
  }

  export default TrendsPage;