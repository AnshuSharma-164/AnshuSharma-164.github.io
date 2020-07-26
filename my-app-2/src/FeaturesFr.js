import React from 'react'
import { Jumbotron, Card } from 'react-bootstrap'
import AirConditioning from './AirConditioning.jpg'

const FeaturesFr = () => {
    return (
        <div>
            <Jumbotron><h1>Caractéristiques</h1></Jumbotron>
            <Card>
                <Card.Body>
                    <img src={AirConditioning}/>
                    <p>Bienvenue chez AC Master où nous offrons des services et des réparations de climatisation de première qualité.</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FeaturesFr;