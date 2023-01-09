import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function ReviewSummary({ review }) {
  const history = useHistory()
  // const [reviewItem, setReviewItem]= useState([]);


  function handleClick() {
    history.push(`/reviews/${review.id}`)
  }

  // function handleAddReviewItem(reviewItem) {
  //   setReviewItem([...reviewItem, newReviewItem])
  // }

  // useEffect(() => {
  //   fetch("http://localhost:3000/reviews")
  //   .then((r) => r.json())
  //   .then((reviewItem) => setReviewItem(reviewItem));
  // }, []);

  function handleDelete(e) {
    e.preventDefault();
    console.log(review.id)
      fetch('http://localhost:3001/reviews/' + review.id, {
        method: 'DELETE',
      })
        .then(r => r.json())
        .then(data => console.log(data))
    history.push(`/`)
  }
  

  return (
    <div>
      <p>{review.comment.slice(0,30)}...</p>
      <button onClick={handleClick}>Go to this review</button>
      <button id="deleteReview" onClick={handleDelete} >Delete Review</button>
    </div>
  )


}

export default ReviewSummary;