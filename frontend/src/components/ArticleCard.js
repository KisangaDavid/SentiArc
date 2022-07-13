import React from 'react';
import {Card, Row} from 'react-bootstrap'

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
            <Card style={{color: "#000", flexDirection: "row", width: "50%"}}>
                { /* TODO: Deal with news articles that do not have a thumbnail - maybe insert app logo? */}
                <Card.Img style={{width: "10vw", height: "10vw"}} src={this.props.imgSource} referrerPolicy="no-referrer"/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.author} | {this.props.time}</Card.Text>
                    <Card.Link href= {this.props.fullLink} target="_blank" rel="noopener noreferrer">Read Full Article</Card.Link>
                </Card.Body>
        </Card>
        );
    }

}


export default ArticleCard