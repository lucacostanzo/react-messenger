import React, { useState, useEffect } from 'react';
import faker from 'faker';
import MessageItem from './MessageItem';

let messages = [
  {
    direction: faker.random.arrayElement(['sent', 'received']),
    body: faker.lorem.text(),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
  },

  {
    direction: faker.random.arrayElement(['sent', 'received']),
    body: faker.lorem.text(),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
  },

  {
    direction: faker.random.arrayElement(['sent', 'received']),
    body: faker.lorem.text(),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
  },

  {
    direction: faker.random.arrayElement(['sent', 'received']),
    body: faker.lorem.text(),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
  },

  {
    direction: faker.random.arrayElement(['sent', 'received']),
    body: faker.lorem.text(),
    sentAt: faker.date.past(),
    receivedAt: faker.date.past(),
    readAt: faker.date.past(),
  },
];

function Messages(props) {
  return (
    <>
      {messages.map((message, index) => {
        if (message.direction == 'sent') {
          return (
            <div className="flex justify-between">
              <div></div>
              <MessageItem {...message} key={index} />
            </div>
          );
        } else {
          return (
            <div className="flex justify-between">
              <MessageItem {...message} key={index} />
              <div></div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Messages;
