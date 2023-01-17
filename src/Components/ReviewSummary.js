import { useHistory } from 'react-router-dom';
import React from 'react';




function ReviewSummary({ review, handleDelete }) {
  const history = useHistory()

  function handleClick() {
    history.push(`/reviews/${review.id}`)
  }

  function handleDeleteReview(e) {
    e.preventDefault();
    console.log(review.id)
      fetch('http://localhost:3001/reviews/' + review.id, {
        method: 'DELETE',
      })
        .then(r => r.json())
        .then(data => handleDelete(review.id))
    history.push(`/`)
  }
  
  return (
    <div className="review-card">
      <p>{review.comment.slice(0,30)}...</p>
      <button onClick={handleClick}>Go to this review</button>
      <button id="deleteReview" onClick={handleDeleteReview} >Delete Review</button>
    </div>
  )
}


export default ReviewSummary;