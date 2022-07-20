import React from 'react';
import {Card} from 'react-bootstrap';
import './components.css';

class TrendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendTitle: props.trendTitle,
            trendStat: props.trendStat,
        }
    }

    render() {
        return (
            <Card className="trendsCard" style={{height: "10rem", width: "95%"}}>
                <Card.Body>
                    <Card.Title style= {{fontSize: "2rem", fontFamily: "Times New Roman, Serif" }}>{this.props.trendTitle}</Card.Title>
                    <Card.Text style= {{fontSize: "1.2rem", fontFamily: "Times New Roman, Serif"}}>{this.props.trendStat} | {this.props.time} </Card.Text> 
                </Card.Body>
        </Card>
        );
    }

}

export default TrendCard