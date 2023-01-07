import './App.css';
import Home from './pages/home/Home';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoPage from './pages/info page/InfoPage';
import MessageSent from './pages/message sent/MessageSent';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infopage/:id" element={<InfoPage />} />
        <Route path="/messagehistory" element={<MessageSent />} />
      </Routes>
      <Footer />
    </BrowserRouter>      
    </div>
  );
}

export default App;
