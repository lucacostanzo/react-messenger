import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ConversationItem from './ConversationItem.jsx';

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <ConversationItem
        Username="KLIK - Tlc Cloud e Mobile"
        Message="Tu: non sono molto d'accordo..."
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9w1USzpGt2Kne8V4cZeykX-EmK4sJj6lb_w&usqp=CAU"
        isRead="0"
        messDate={new Date(2020, 1, 1)}
      />
    </div>
  );
}

export default App;
