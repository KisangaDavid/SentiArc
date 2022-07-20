import Plot from 'react-plotly.js';

function LineGraph(props) {
    //const data = {labels: props.xAxisData, datasets: [{label: 'Popularity', fill: false, lineTension: 0.5, backgroundColor: 'rgba(75,192,192,1)', borderColor: 'rgba(0,0,0,1)', borderWidth: 2, data: props.listOfPopScores}]}
    return (
        <Plot style={{height: "95%", width: "80%", margin: "auto"}} data={[{
                x: props.xAxisData,
                y: props.listOfPopScores,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'rgb(225, 221, 221)'}, 
            }]}
            layout={{autosize: true, title: 'Public interest in ' + props.companyName + ' over the last 5 years', yaxis:{title: "Relative Interest",  gridcolor: "rgba(225, 221, 221, .2)"}, xaxis:{gridcolor: "rgba(225, 221, 221, .2)"}, plot_bgcolor:"#282c34", paper_bgcolor:"#282c34", font: {color: 'rgb(225, 221, 221)'}}}/>);
}

export default LineGraph;