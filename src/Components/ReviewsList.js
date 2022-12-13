import React from 'react';
import ReviewSummary from './ReviewSummary';


function ReviewsList({ reviews }) {
  const mappedReviews = reviews.map(review => <ReviewSummary key={review.id} review={review} />)
  return (
    <div id="">
      {mappedReviews}
    </div>
  )
}


  

export default ReviewsList;

