import React from 'react';
import { useParams } from 'react-router-dom';



function Review({ reviews }) {
  const params = useParams()
  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {

    return (
      <div>

        <h3>{foundReview.restaurant}</h3>
        <p>{foundReview.rating} ⭐️</p>
        <p>{foundReview.comment}</p>

      </div>
    )
  } else {
    return (<h2>No review for that restaurant</h2>)
  }
}

export default Review;
