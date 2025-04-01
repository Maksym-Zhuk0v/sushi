import React from "react";

interface IWorkTime {
  name: string;
  time: string;
}

export const WorkTime = ({ name, time }: IWorkTime) => {
  return (
    <div className="flex gap-4 items-end text-base">
      <p>{name}</p>
      <div className="grow h-2 border-dflt-top border-dotted" />
      <p>{time}</p>
    </div>
  );
};
