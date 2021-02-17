import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function ConversationItem(props) {
  return (
    <div className="flex flex-grow py-6">
      <div className="bg-gray-100 flex rounded-2xl ml-3 cursor-pointer p-3 w-96 items-center">
        <img className="rounded-full w-10 h-10" src={props.Img} />
        <div className=" mt-1 ml-3 flex flex-col justify-center flex-grow">
          <p className="text-black font-semibold">{props.Username}</p>
          <p className="text-gray-400 text-xs font-normal">{props.Message}</p>
        </div>
        {returnRead(props.isRead)}
        <p className="text-xs ml-2">{returnDate(props.messDate)}</p>
      </div>
    </div>
  );
}

function returnRead(flag) {
  if (flag == 1) {
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
  }
}

function returnDate() {
  const date = new Date(2020, 1, 1);
  const dateLuxon = DateTime.fromJSDate(date);
  const string = dateLuxon.toRelative();
  return string;
}

export default ConversationItem;
