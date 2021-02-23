import React, { useState, useEffect } from 'react';
import faker from 'faker';

function MessageItem(props) {
  return <SetDirection {...props} />;
}

function SetDirection(props) {
  if (props.direction == 'sent') {
    return (
      <div className="flex max-w-2xl">
        <div className="bg-blue-500 cursor-pointer mr-4 rounded-lg mb-2">
          <p className="text-left text-sm text-white ml-3 mr-3 py-2">
            {props.body}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex pl-3 max-w-2xl">
        <img
          className="rounded-full w-6 h-6 flex-shrink-0"
          src={faker.image.imageUrl(100, 100, null, true)}
        />
        <div className="bg-gray-300 cursor-pointer ml-2 rounded-lg mb-2">
          <p className="text-left text-sm text-black ml-3 mr-3 py-2">
            {props.body}
          </p>
        </div>
      </div>
    );
  }
}

export default MessageItem;
