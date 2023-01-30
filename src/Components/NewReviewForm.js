import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css'


function NewReviewForm({ addReview }) {

  const history = useHistory();
  
  //State of formData created to manage all of form data in one state object;
  const [formData, setFormData] = useState({
    restaurant: '',
    comment: '',
    rating: '',
    image: ''
  })
  
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  //callback function to handle onSubmit behavior of controlled form;
  function handleSubmit(e) {
    //prevent default form submission behavior;
    e.preventDefault()
    fetch('http://localhost:3001/reviews', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
    },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
       addReview(data)
        history.push('/')
      })

    //clear out form input after submission;
    setFormData({
      ...formData,
      restaurant: "",
      comment: "",
      rating: "",
      image: ""
    });
  }

  return (
    <div className="new-review-form">
      <h2>New Review</h2>
      <hr />
      
      <form onSubmit={handleSubmit} >  
      <fieldset>
        <label>Restaurant: </label>
        <input type="text" 
          name="restaurant" 
          placeholder="Restaurant name" 
          onChange={handleChange} 
          value={formData.restaurant} 
        /><br/>

        <label>Comment: </label>
        <textarea type="text" 
          name="comment" 
          placeholder="My review" 
          onChange={handleChange} 
          value={formData.comment} 
        /><br/>


        <label>Rating: </label>
        <input type="number" 
          name="rating" 
          placeholder="#" 
          onChange={handleChange} 
          max="5" 
          min="0" 
          value={formData.rating} 
        /><br/>


        <label>Image: </label>
        <input type="" 
          name="image" 
          placeholder="image" 
          onChange={handleChange} 
          value={formData.image} 
        /><br/>
        </fieldset>
        <br>
        </br>
        <button type="submit">Add My Review</button><br/>
      </form>
      
    </div>
  );
}

export default NewReviewForm;


