import React from 'react';
import ReviewSummary from './ReviewSummary';


function ReviewsList({ reviews }) {
  const reviewsList = reviews.map(review => <ReviewSummary key={review.id} review={review} />)
  return (
    <div id="">
      {reviewsList}
      <br />
      <br />
      <br /> 

    </div>
  )
}


  

export default ReviewsList;

