import React from 'react';
import './App.css'; // Import your CSS file here

function App() {
  return (
    <div className="App">
      <header>
        <a href="index.html" className="logo">
          <div className="icon">
            <span>TRAVEL</span>
          </div>
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#packages">Packages</a>
          <a href="book.html">Book</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#services">Services</a>
        </nav>
        <form action="" className="search-bar-container">
          <input type="search" id="search-bar" placeholder="search ..." />
        </form>
      </header>

      <section className="home" id="home">
        <div className="content">
          <h3>
            <b>welcome travellers</b>
          </h3>
          <p>travel around Sri Lanka.</p>
          <a href="about.html" className="btn">
            more...
          </a>
        </div>
        <div className="video-container">
          <video src="image/HOME1.mp4" id="video-slider" loop autoPlay muted></video>
        </div>
      </section>

      {/* Other sections go here */}

      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <h3>About Us</h3>
            <p>
              'Organization Name' is Sri Lanka's biggest online traveling stage
              that has changed transport travel in the nation by conveying comfort
              to a great many Sri Lankans who travel utilizing transport.{' '}
              <a href="about.html">learn more...</a>
            </p>
            <h2>Contact : 011-23231230 / 077-2323112 </h2>
            <h2>
              E-mail : <a href="#email">travel123@gmail.com</a>
            </h2>
          </div>
          {/* Other boxes go here */}
        </div>
        <h1 className="credit">
          Created by <span>Mr. Shalintha</span> | all rights reserved! |
        </h1>
      </footer>
    </div>
  );
}

export default App;
