import React, { useState, useEffect } from 'react';
import faker from 'faker';
import MessageItem from './MessageItem';
import { DateTime } from 'luxon';

const messages = new Array(10).fill({}).map(() => ({
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
            <div className="flex self-end">
              <MessageItem {...message} key={index} />
            </div>
          );
        } else {
          return (
            <>
              <div className="flex self-start">
                <MessageItem {...message} key={index} />
              </div>
              <div className="self-center mb-3">
                <MessageDateReception {...message} />
              </div>
            </>
          );
        }
      })}
    </>
  );
}

function MessageDateReception(props) {
  let dataJs = props.receivedAt;
  let dateL = DateTime.fromJSDate(dataJs);
  let stringDate = dateL.toLocaleString(DateTime.DATETIME_SHORT);
  return <div className="text-gray-400 text-xs ">{stringDate}</div>;
}

export default Messages;
