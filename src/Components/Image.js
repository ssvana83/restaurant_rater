import React from 'react';
import { useParams } from 'react-router-dom';


function Image({ reviews }) {
  const params = useParams()
  const foundReview = reviews.find(review => review.image === parseInt(params.image))

  if (foundReview) {

    function handleClick() {

    }

    return (
      <div>
        <image></image>
      </div>
    )
  }
}

export default Image;