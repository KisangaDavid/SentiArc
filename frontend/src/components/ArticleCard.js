import React from 'react';
import {Card} from 'react-bootstrap'

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
            <Card style={{color: "#000"}}>
                <Card.Img src={this.props.imgSource} referrerpolicy="no-referrer" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.author} | {this.props.time} | <a href={this.props.fullLink}>Read Full Article</a></Card.Text>
                </Card.Body>
        </Card>
        );
    }

}


export default ArticleCard