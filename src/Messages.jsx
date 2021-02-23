import React, { useState, useEffect } from 'react';
import faker from 'faker';
import MessageItem from './MessageItem';

const messages = new Array(20).fill({}).map(() => ({
  direction: faker.random.arrayElement(['sent', 'received']),
  body: faker.lorem.text(),
  sentAt: faker.date.past(),
  receivedAt: faker.date.past(),
  readAt: faker.date.past(),
}));

function Messages(props) {
  return (
    <>
      {messages.map((message, index) => {
        if (message.direction == 'sent') {
          return (
            <div className="flex justify-between self-end">
              <MessageItem {...message} key={index} />
            </div>
          );
        } else {
          return (
            <div className="flex justify-between self-start">
              <MessageItem {...message} key={index} />
            </div>
          );
        }
      })}
    </>
  );
}

export default Messages;
