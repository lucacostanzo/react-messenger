import React, { useState, useEffect } from 'react';
import './App.css';
import Conversation from './Conversation.jsx';
import Messages from './Messages.jsx';
import faker from 'faker';

const listmessage = new Array(11).fill({}).map(() => ({
  username: faker.name.findName(),
  avatarUrl: faker.image.imageUrl(200, 200, null, true),
  lastMessage: faker.lorem.text(),
  isRead: faker.random.boolean(),
  updateAt: faker.date.recent(),
  contMessages: new Array(20),
}));

function App() {
  return (
    <div className="flex h-screen w-screen bg-white">
      <div>
        <Conversation contMessages={listmessage} />
      </div>
      <div className="flex flex-col-reverse items-stretch flex-grow overflow-y-scroll">
        <Messages />
      </div>
    </div>
  );
}

export default App;
