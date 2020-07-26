import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReviewsList from './ReviewsList';
import ReviewEditor from './ReviewEditor';

class Review extends Component {
    state = {
        reviews: [
            {name:"Roy", email:"roy@smash.com", rating:"5 Star", content:"This is a great product. Thank you for making it."}
        ]
    }
    addReview = (review) => {
        console.log(review)
        let reviews = [...this.state.reviews, review]
        this.setState({
            reviews: reviews
        })
    }
    render () {
        return (
            <div className="Reviews">
                
                            <Jumbotron>
                                <h1>Reviews</h1>
                            </Jumbotron>
                            <ReviewEditor addReview={this.addReview}/>
                            <ReviewsList reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default Review;