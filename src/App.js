import React, { useState } from 'react';
import './App.css';
import BallonsEffect from './components/BallonsEffect';

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <div className="stars"></div>
      <BallonsEffect />
      {!showForm ? (
        <>
          <div className="slideshow-container">
            <div className="slide-text">Meet 🤝</div>
            <div className="slide-text">Call 📞</div>
            <div className="slide-text">Text 💬</div>
            <div className="slide-text">Hangout 👥</div>
          </div>
          <div className="main-buttons">
            <button className="signup-button" onClick={toggleForm}>
              Sign Up
            </button>
            <button className="signin-button">
              Sign In
            </button>
          </div>
        </>
      ) : (
        <div id="sign-up">
          <form>
            <label htmlFor="user-name">Username</label>
            <input type="text" id="user-name" placeholder="Enter A Username" />
            <label htmlFor="real-name">Real Name</label>
            <input type="text" id="real-name" placeholder="Enter Real Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" />
            <label htmlFor="birthday">Date of Birth</label>
            <input type="date" id="birthday" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter A Password" />
            <label htmlFor="password-confirm">Confirm Password</label>
            <input type="password" id="password-confirm" placeholder="Confirm Password" />
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <button className="back-button" onClick={toggleForm}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;
