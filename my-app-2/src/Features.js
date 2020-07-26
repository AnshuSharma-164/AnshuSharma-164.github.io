import React from 'react'
import { Jumbotron, Card } from 'react-bootstrap'
import AirConditioning from './AirConditioning.jpg'

const Features = () => {
    return (
        <div>
            <Jumbotron><h1>Features</h1></Jumbotron>
            <Card>
                <Card.Body>
                    <img src={AirConditioning}/>
                    <p>Welcome to AC Master where we offer premium Air conditioning repair, and services.</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Features;