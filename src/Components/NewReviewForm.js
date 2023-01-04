import React, { useState } from 'react';


function NewReviewForm({ addReview }) {
  const [formData, setFormData] = useState({
    restaurant: '',
    comment: '',
    rating: '',
    image: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    addReview(formData)
  }

  return (
    <div className="new-review-form">
      <h2>New Review</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" 
          name="restaurant" 
          placeholder="Restaurant name" 
          onChange={e => setFormData({...formData, restaurant: e.target.value})} 
          value={formData.restaurant} />

        <textarea type="text" 
          name="comment" 
          placeholder="My review" 
          onChange={e => setFormData({...formData, comment: e.target.value})} 
          value={formData.comment} />

        <input type="number" 
          name="rating" 
          placeholder="rating" 
          onChange={e => setFormData({...formData, rating: e.target.value})} 
          max="5" 
          min="0" 
          value={formData.rating} />

        <input type="" 
          name="image" 
          placeholder="image" 
          onChange={e => setFormData({...formData, image: e.target.value})} 
          value={formData.image} 
        />
        <button type="submit">Add My Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;