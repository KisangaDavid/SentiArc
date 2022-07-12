import React from 'react';

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
        this.getData = this.getData.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getData = this.getData.bind(this)
    }

    render() {
        return <div>
           title: {this.state.title}, author: {this.state.author}, date: {this.state.time}, fullLink: {this.state.fullLink}, imgSource: {this.state.imgSource}
        </div>
    }

}


export default ArticleCard