import React, { useState, useEffect } from 'react';
import ConversationItem from './ConversationItem';

function Conversation(props) {
  return (
    <div className="flex flex-col h-full border w-72">
      {props.contMessages.map((listmessage, index) => {
        return <ConversationItem {...listmessage} key={index} />;
      })}
    </div>
  );
}

export default Conversation;
