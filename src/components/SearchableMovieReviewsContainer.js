import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends React.Component {
    state= {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(reviews => this.setState({ reviews: reviews.results}))
    }

    handleChange = event => {
        this.setState({ searchTerm: event.target.value})
    } 
    
    render() {
        return (
            <div>
                <h2>Search for Latest Reviews</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="search for reviews..."
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                <input type="submit"/>
                </form>
                {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
