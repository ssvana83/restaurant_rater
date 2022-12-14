import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>, 
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <App />
  </Router>
);

