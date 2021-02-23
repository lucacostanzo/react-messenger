import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function ConversationItem(props) {
  return (
    <div className="flex flex-grow">
      <div className="bg-white flex flex-grow ml-2 cursor-pointer hover:bg-gray-200 items-center h-full w-full mr-1 max-w-sm min-w-min">
        <img className="rounded-full w-10 h-10" src={props.avatarUrl} />
        <div className="ml-3 flex flex-col justify-center flex-grow">
          <p className="text-black font-semibold">{props.username}</p>
          <div className="">
            <MessageText {...props} />
          </div>
        </div>
        <p className="text-xs">{ReturnDate(props.updateAt)}</p>
        <p className="text-xs ml-2">{ReturnRead(props.isRead)}</p>
      </div>
    </div>
  );
}

function ReturnRead(flag) {
  if (flag == true) {
    return (
      <svg
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    );
  } else {
    return <div className="w-4"></div>;
  }
}

function MessageText(props) {
  if (props.isRead == false) {
    return (
      <p className="truncate w-40 text-gray-600 text-xs">{props.lastMessage}</p>
    );
  } else {
    return (
      <p className="truncate w-40 text-black font-bold text-xs">
        {props.lastMessage}
      </p>
    );
  }
}

function ReturnDate(date) {
  const dateLuxon = DateTime.fromJSDate(date);
  const string = dateLuxon.toRelative({ style: 'narrow' });
  return string;
}

export default ConversationItem;
