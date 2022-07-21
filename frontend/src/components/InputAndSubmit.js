import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class InputAndSubmit extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        toSearch : ""
    }

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            toSearch : event.target.value
        })
       }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control placeholder="Enter Company Name" onChange = {this.handleChange}/>
                <Form.Text style={{color:"rgba(66, 138, 245, .6)"}}>
                   Press Search for information about the inputed company!
                    </Form.Text>
                </Form.Group>
                <Link to='/PostSubmitPage' state={{companyName : this.state.toSearch}}
                  type="submit" className="btn btn-primary" style={{marginTop: "1rem"}}>Search</Link>
            </Form>
        </div>
    }

    getData(input) {
        axios({
            method: "GET",
            url:"/article/",
            params: {
                companyName: input
            }
          }).then((response)=>{
            const data = response.data
            const convertedData = this.convertData(data)      
          }).catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
              }
          })}

    convertData(data) {
        var parsed = JSON.parse(data);
        return parsed
        
    }
}

export default InputAndSubmit