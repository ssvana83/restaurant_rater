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

      <NavLink to="/" style={linkStyles}>All Reviews</NavLink>
      <NavLink to="reviews/new" style={linkStyles}>Create a New Review</NavLink>
      <NavLink to="reviews/:id" style={linkStyles}>Reviews</NavLink>
      
    </div>
  );
}

export default Navbar;