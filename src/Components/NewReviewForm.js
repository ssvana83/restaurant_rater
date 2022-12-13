import React, { useState } from 'react';

const BASE_URL= "https://quelp.onrender.com/reviews"

const initialNewReview = {
  restaurant: "",
  review: "",
  rating: "",
  image: "",
}

function NewReviewForm({ setReviews }) {
  const [newReview, setNewReview] = useState({initialNewReview});

  function handleChange(e) {
    setNewReview((currentNewReviewState) => ({
      ...currentNewReviewState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(0);
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application.json"
      },
      body: JSON.stringify(newReview)
    })
    .then((resp) => resp.json())
    .then(data => setReviews((currentReviews) => [...currentReviews, data]));

    setNewReview(initialNewReview);
  }

  return (
    <div className="new-review-form">
      <h2>New Review</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Restaurant name" onChange={handleChange}/>
        <input type="text" name="review" placeholder="My review" onChange={handleChange}/>
        <input type="" name="stars" placeholder="how many stars" onChange={handleChange}/>
        <button type="submit">Add My Review</button>
      </form>
    </div>
  )
}

export default NewReviewForm;