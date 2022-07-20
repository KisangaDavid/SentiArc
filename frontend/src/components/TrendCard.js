import React from 'react';
import {Card} from 'react-bootstrap';
import './components.css';
import RedDownArrow from './RedDownArrow.png'
import GreenUpArrow from './GreenUpArrow.png'

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
            <Card className="trendsCard" style={{height: "6.6rem"}} >
                <Card.Img style={{width: "5.5rem", height: "5.5rem", marginLeft:".5rem", marginTop:".5rem", marginBottom:".5rem"}} src={(this.props.trendStat > 0) ? GreenUpArrow : RedDownArrow} referrerPolicy="no-referrer"/>
                <Card.Body>
                    <Card.Title style= {{fontSize: "2rem", textAlign: "center", fontFamily: "Times New Roman, Serif" }}>{this.props.trendTitle + ":"}</Card.Title>
                    <Card.Text style= {{fontSize: "2rem", textAlign: "center", fontFamily: "Times New Roman, Serif", color: (this.props.trendStaSt > 0) ? "green" : "red"}}> {this.props.trendStat + "%"} </Card.Text> 
                </Card.Body>
        </Card>
        );
    }

}

export default TrendCard