"use client";

import React from "react";


import clsx from "clsx";

import "../globals.css";

export default function AdminDash() {
  const [users, setUsers] = React.useState([
    {
      name: "Junior Garcia",
      avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
      username: "jrgarciadev",
      url: "https://x.com/jrgarciadev",
      year: "1st year",
      status: "Inactive",
    },
    {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      username: "janedoe",
      url: "https://x.com/janedoe",
      year: "2nd year",
      status: "Inactive",
    },
    {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      username: "johnsmith",
      url: "https://x.com/johnsmith",
      year: "3rd year",
      status: "Inactive",
    },
    {
      name: "Junior Garcia",
      avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
      username: "jrgarciadev",
      url: "https://x.com/jrgarciadev",
      year: "4th year",
      status: "Inactive",
    },
  ]);
  const [successMsg, setSuccessMsg] = React.useState("");

  const handleCheckbox = (idx: number) => {
    const userName = users[idx].name;
    setUsers(prev => prev.filter((_, i) => i !== idx));
    setSuccessMsg(`${userName} successfully Made active`);
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">

      <div>
        <p className="text-3xl mb-14">Bus pass requests </p>
      </div>
      {users.map((user, idx) => (
        <label
          key={user.username + idx}
          className={clsx(
            "inline-flex w-full max-w-md bg-content1",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent"
          )}
        >
          <input
            type="checkbox"
            onChange={() => handleCheckbox(idx)}
            aria-label={user.name}
            className="mr-2"
          />
          <div className="w-full flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-gray-900">{user.name}</div>
                <a href={user.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500">
                  @{user.username}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-tiny text-gray-900">{user.year}</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{user.status}</span>
            </div>
          </div>
        </label>
      ))}
      {successMsg && (
        <div className="mt-4 text-green-600 font-semibold animate-fade-in">{successMsg}</div>
      )}
    </div>
  );
}
