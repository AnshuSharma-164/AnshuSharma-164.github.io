import React from 'react'
import { Jumbotron,Form, Card, Button } from 'react-bootstrap'

const ScheduleFr = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Programme</h1>
            </Jumbotron>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Quand souhaitez-vous planifier avec nous:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sélectionnez le service que vous souhaitez:</Form.Label>
                            <Form.Check type="checkbox" id="default" label="SERVICE DE RÉPARATION AC"/>
                            <Form.Check type="checkbox" id="default" label="AC TUNE-UPS"/>
                            <Form.Check type="checkbox" id="default" label="PLANS DE MAINTENANCE ET DE PROTECTION EN REFROIDISSEMENT"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quel est votre nom:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quel est votre email:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quel est votre numéro de carte de crédit:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Button>Soumettre</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ScheduleFr;