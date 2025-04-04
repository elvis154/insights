import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import LoginPage from "./LoginPage";
import Signup from "./Signup";
import LogoutPage from "./LogoutPage";
import Header from "./Header";
import Home from "./Home"
import Chatbot from "./Chatbot"
import ChatBox from "./ChatBox";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />      
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/chatbot" element={<Chatbot />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
