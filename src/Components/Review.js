import React from 'react';
import { useParams } from 'react-router-dom';



function Review({ reviews }) {
  const params = useParams()
  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {

    function handleClick() {
     
    }

    return (
      <div>
        <h2>Review</h2>
        <hr/>
        <h3>{foundReview.restaurant}</h3>
        <p>{foundReview.rating} ⭐️</p>
        <p>{foundReview.comment}</p>
        <button onClick={handleClick}>View photos</button>

      </div>
    )
  } else {
    return (<h2>No review for that restaurant</h2>)
  }
}

export default Review;
