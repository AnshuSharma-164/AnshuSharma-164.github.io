import React from 'react'
import { Jumbotron,Form, Card, Button } from 'react-bootstrap'

const Schedule = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Schedule</h1>
            </Jumbotron>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>When would you like to schedule with us:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select What service you would like:</Form.Label>
                            <Form.Check type="checkbox" id="default" label="AC REPAIR SERVICE"/>
                            <Form.Check type="checkbox" id="default" label="AC TUNE-UPS"/>
                            <Form.Check type="checkbox" id="default" label="COOLING MAINTENANCE AND PROTECTION PLANS"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What is your Name:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What is your email:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>What is your creditcard number:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Button>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Schedule;