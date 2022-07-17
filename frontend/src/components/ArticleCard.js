import React from 'react';
import {Card} from 'react-bootstrap';
import './components.css';

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
                { /* TODO: Deal with news articles that do not have a thumbnail - maybe insert app logo <-- YA once we got logo 
                Make links open in new tab*/}
                <Card.Img style={{width: "8.5rem", height: "8.5rem", marginLeft:".9rem", marginTop:".9rem", marginBottom:".9rem"}} src={this.props.imgSource} referrerPolicy="no-referrer"/>
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