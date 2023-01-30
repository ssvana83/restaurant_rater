import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewReviewForm from './NewReviewForm';
import Review from './Review';
import ReviewsList from './ReviewsList';
import Navbar from './NavBar';
import Header from './Header';
import Homepage from './Homepage';


function App() {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/reviews")
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])

  function addReview(newReview) {
        setReviews([...reviews, newReview])
  }

  function handleDelete(id) {
    const newReviews = reviews.filter((review) => review.id !== id)
    setReviews(newReviews)
  }


  return (
    <div className="App">
     <Header />
      <h3>Reviews of Restaurants in your Area</h3>
      <hr />
      <Router>
          <Navbar />
          <Switch>

              <Route exact path ="/home">
                <Homepage />
              </Route>

              <Route exact path="/">
                <ReviewsList reviews={reviews} addReview= {addReview} handleDelete={handleDelete} />
              </Route>

              <Route exact path="/newReview">
                <NewReviewForm addReview={addReview}/>
              </Route>

             <Route exact path="/reviews/:id">
                <Review reviews={reviews} />
            </Route>

          </Switch>
      </Router>
      <hr/>
      <footer>Restaurant Rater 105 N. 9th Ave, New York, NY 67913</footer>
    </div>
  );
}

export default App;






