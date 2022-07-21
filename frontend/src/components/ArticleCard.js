import React from 'react';
import {Card} from 'react-bootstrap';
import './components.css';
import SentiArcLogo from './SentiArcLogo.jpg'

class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            author: props.author,
            time: props.time,
            fullLink: props.fullLink,
            imgSource: props.imgSource,
        }
    }

    render() {
        return (
            <Card className="customCard" style={{height: "10.5rem"}}>
                <Card.Img style={{width: "8.5rem", height: "8.5rem", marginLeft:".9rem", marginTop:".9rem", marginBottom:".9rem"}} src={(this.props.imgSource != null) ? this.props.imgSource : SentiArcLogo} referrerPolicy="no-referrer"/>
                <a href={this.props.fullLink} target="_blank" rel="noreferrer noopener" class="stretched-link customLink">
                <Card.Body>
                    <Card.Title style= {{fontSize: "2rem", fontFamily: "Times New Roman, Serif" }}>{this.props.title}</Card.Title>
                    <Card.Text style= {{fontSize: "1.2rem", fontFamily: "Times New Roman, Serif"}}>{this.props.author} | {this.props.time} </Card.Text> 
                </Card.Body>
                </a>
        </Card>
        );
    }

}

export default ArticleCard