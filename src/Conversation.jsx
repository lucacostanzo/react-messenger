import React, { useState, useEffect } from 'react';
import ConversationItem from './ConversationItem';
import faker from 'faker';

function Conversation(props) {
  const listmessage = new Array(11).fill({}).map(() => ({
    username: faker.name.findName(),
    avatarUrl: faker.image.imageUrl(200, 200, null, true),
    lastMessage: faker.lorem.text(),
    isRead: faker.random.boolean(),
    updateAt: faker.date.recent(),
  }));

  return (
    <div className="flex flex-col h-full border w-72">
      {listmessage.map((listmessage, index) => {
        return <ConversationItem {...listmessage} key={index} />;
      })}
    </div>
  );
}

export default Conversation;
