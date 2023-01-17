import React from 'react';
import ReviewSummary from './ReviewSummary';

const styles = { 
  width: "200px",
  height: "200px"
  

}


function ReviewsList({ reviews, handleDelete }) {

  const reviewsList = reviews.map(review => <ReviewSummary handleDelete={handleDelete} key={review.id} review={review} />)

  return (
    <div id="">
      <img styles = {styles} src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      {reviewsList}
      <br />
      <br />
      <br /> 
    </div>
  )
}

export default ReviewsList;


