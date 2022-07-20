import Plot from 'react-plotly.js';

function LineGraph(props) {
    return (
        <Plot style={{height: "90%", width: "72%", margin: "auto"}} data={[{
                x: props.xAxisData,
                y: props.listOfPopScores,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'rgb(225, 221, 221)'}, 
            }]}
            layout={{autosize: true, title: 'Public interest in ' + props.companyName + ' over the last 5 years', yaxis:{title: "Relative Interest in %",  gridcolor: "rgba(225, 221, 221, .2)"}, xaxis:{gridcolor: "rgba(225, 221, 221, .2)"}, plot_bgcolor:"#282c34", paper_bgcolor:"#282c34", font: {color: 'rgb(225, 221, 221)'}}}/>);
}

export default LineGraph;