import React, { useState, useEffect } from 'react';
import './App.css';
import Conversation from './Conversation.jsx';
import MessageItem from './MessageItem.jsx';
import Messages from './Messages.jsx';

function App() {
  return (
    <div className="flex h-screen w-screen bg-white">
      <div>
        <Conversation />
      </div>
      <div className="flex flex-col-reverse items-stretch flex-grow">
        <Messages />
      </div>
    </div>
  );
}

export default App;
