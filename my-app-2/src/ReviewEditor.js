import React, {Component} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
class ReviewEditor extends Component {
    state = {
        name: null,
        email: null,
        rating: "1 Star",
        content: null
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addReview(this.state);
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" id="name" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" id="email" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control as="select" id="rating" onChange={this.handleChange}>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows="4" id="content" onChange={this.handleChange}/>
                            </Form.Group>
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ReviewEditor;