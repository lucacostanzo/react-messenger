import React, { useState, useEffect } from 'react';
import ConversationItem from './ConversationItem';
import faker from 'faker';

function Conversation(props) {
  let listMessage = [
    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'true',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'false',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'false',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'true',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'true',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'true',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'false',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'false',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'false',
      updateAt: faker.date.recent(),
    },

    {
      username: faker.name.findName(),
      avatarUrl: faker.image.imageUrl(200, 200, null, true),
      lastMessage: faker.lorem.text(),
      isRead: 'false',
      updateAt: faker.date.recent(),
    },
  ];
  return (
    <div className="flex flex-col h-full w-full">
      {listMessage.map((listMessage, index) => {
        return <ConversationItem {...listMessage} key={index} />;
      })}
    </div>
  );
}

export default Conversation;
