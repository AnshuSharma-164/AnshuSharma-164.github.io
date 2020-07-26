import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReviewsList from './ReviewsList';
import ReviewEditorFr from './ReviewEditorFr';

class ReviewFr extends Component {
    state = {
        reviews: [
            {name:"Roy", email:"roy@smash.com", rating:"5 Star", content:"C'est un très bon produit. Merci de l'avoir fait."}
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
                                <h1>Commentaires</h1>
                            </Jumbotron>
                            <ReviewEditorFr addReview={this.addReview}/>
                            <ReviewsList reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default ReviewFr;