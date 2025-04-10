import React from "react";
import { useNavigate } from "react-router-dom";  
import Background3D from "./Background3D";  
import Footer from './Footer';
import './Home.css';  

const HomePage = () => {
  const navigate = useNavigate();  
  
  // Function to navigate to the "Getting Started" page
  const handleGetStarted = () => {
    navigate("/chatbot");  
  };
  
  // Function to navigate to the "About Us" page
  const handleAboutUs = () => {
    navigate("/about-us");  
  };

  return (
    <div className="home-page">
      <Background3D />
      <div className="content">
        <div className="welcome-text">
          <h2>Welcome to</h2>
          <h1 className="highlight-text">InsiGhtX</h1>
          <p>Our AI-powered solution predicts, prevents, and personalizes 
          customer retention—automatically!</p>
        </div>
        <div className="buttons">
          <button onClick={handleGetStarted}>Getting Started</button>
          <button onClick={handleAboutUs}>About Us</button>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default HomePage;
