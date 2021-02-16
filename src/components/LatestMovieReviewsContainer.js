import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({
            reviews: reviews.results
        }))
    }

    render(){
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Movie Reviews</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
