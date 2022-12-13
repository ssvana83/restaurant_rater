import React from 'react';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


function Review({ reviews }) {
  const params = useParams()
  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {

    return (
      <div>

        <h3>{foundReview.restaurant}</h3>
        <StarRatings />
        <p>{foundReview.rating} ⭐️</p>
        <p>{foundReview.content}</p>

      </div>
    )
  } else {
    return (<h2>No review for that restaurant</h2>)
  }
}

export default Review;
