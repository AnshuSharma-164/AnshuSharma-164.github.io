import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewsList = (props) => {
    const {reviews} = props;
    const reviewList = reviews.map(review => {
        return (
            <div>
                <br/>
                <Card >
                    <br/>
                    <Card.Body>
                        <Card.Title>
                            <h3>{ review.name }</h3>
                        </Card.Title>
                        <p>{ review.rating }</p>
                        <p>{ review.content }</p>
                    </Card.Body>
                </Card>
            </div>
        );
    })
    return (
        <div>
            { reviewList }
        </div>
    );
}

export default ReviewsList;