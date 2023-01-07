import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function Review({ reviews }) {
  const history = useHistory()
  const params = useParams()
  const foundReview = reviews.find(review => review.id === parseInt(params.id))
  

  if (foundReview) {

    function handleClick() {
      document.getElementById("restaurantImage").src = `${foundReview.image}`
      document.getElementById("imageButton").style.display= 'none'
    }

    return (
      <div>
        <h2>Review</h2>
        <hr/>
        <h3>{foundReview.restaurant}</h3>
        <p>{foundReview.rating} ⭐️</p>
        <p>{foundReview.comment}</p>
        <img id="restaurantImage"></img>
        <button id="imageButton" onClick={handleClick}>View photos</button>

      </div>
    )
  } else {
    return (<h2>No review for that restaurant</h2>)
  }
}

export default Review;
