import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "200px",
  padding: "12px",
  margin: "0 8px 8px",
  background: "lightblue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>

      <NavLink to ="/home" style={linkStyles} exact activeStyle={{background: 'darkblue'}}>Homepage</NavLink>
      <NavLink to="/" style={linkStyles} exact activeStyle={{background: 'darkblue'}} >All Reviews</NavLink>
      <NavLink to="newReview" style={linkStyles} exact activeStyle={{background: 'darkblue'}} >Create a New Review</NavLink>
      <NavLink to="reviews/:id" style={linkStyles} exact activeStyle={{background: 'darkblue'}} >Reviews</NavLink>
      
    </div>
  );
}

export default Navbar;