import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Review from './Review';
import '../App.css'



function NewReviewForm({ addReview }) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    restaurant: '',
    comment: '',
    rating: '',
    image: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    addReview(formData)
    history.push(`/`)
  }

  return (
    <div className="new-review-form">
      <h2>New Review</h2>
      <hr />
      
      <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Restaurant: </label>
        <input type="text" 
          name="restaurant" 
          placeholder="Restaurant name" 
          onChange={e => setFormData({...formData, restaurant: e.target.value})} 
          value={formData.restaurant} /><br/>

        <label>Comment: </label>
        <textarea type="text" 
          name="comment" 
          placeholder="My review" 
          onChange={e => setFormData({...formData, comment: e.target.value})} 
          value={formData.comment} /><br/>


        <label>Rating: </label>
        <input type="number" 
          name="rating" 
          placeholder="#" 
          onChange={e => setFormData({...formData, rating: e.target.value})} 
          max="5" 
          min="0" 
          value={formData.rating} /><br/>


        <label>Image: </label>
        <input type="" 
          name="image" 
          placeholder="image" 
          onChange={e => setFormData({...formData, image: e.target.value})} 
          value={formData.image} 
        /><br/>
        </fieldset>

        <button type="submit">Add My Review</button><br/>
      </form>
      
    </div>
  );
}

export default NewReviewForm;