"use client";

import React from "react";
// Assuming cn is imported from a utility library like clsx or tailwind-merge
// If you don't have clsx or tailwind-merge installed, you'll need to install one of them:
// npm install clsx
// or
// npm install tailwind-merge
// Then update the import accordingly:
// import { cn } from 'clsx'; // or 'tailwind-merge'
// If you have a custom cn utility, ensure it's correctly imported.
import { cn } from "@heroui/react"; // <-- This import for 'cn' might be incorrect depending on your setup.
                                  // Consider changing this to import from 'clsx' or 'tailwind-merge'
                                  // if you are using one of those libraries for class merging.

import { Checkbox, Link, User, Chip } from "@heroui/react";
import "../globals.css";

export default function AdminDash() {
  const [isSelected, setIsSelected] = React.useState(false);

  const user = {
    name: "Junior Garcia",
    avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
    username: "jrgarciadev",
    url: "https://x.com/jrgarciadev",
    role: "Software Developer",
    status: "Active",
  };

  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex w-full max-w-md bg-content1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      isSelected={isSelected}
      onValueChange={setIsSelected}
    >
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          description={
            <Link isExternal href={user.url} size="sm">
              @{user.username}
            </Link>
          }
          name={user.name}
        />
        <div className="flex flex-col items-end gap-1">
          <span className="text-tiny text-default-500">{user.role}</span>
          <Chip color="success" size="sm" variant="flat">
            {user.status}
          </Chip>
        </div>
      </div>
    </Checkbox>
  );
}
