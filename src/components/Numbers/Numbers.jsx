import React, { useState } from "react";

const Numbers = ({ selectedNumber, setSelectedNumber, setWarning }) => {
  const numArray = [0, 1, 2, 3, 4, 5, 6];

  return (
    <ul className="flex gap-2">
      {numArray.map((item, index) => {
        return (
          <li
            key={index}
            className={`font-semibold border-2 border-black py-2 px-4 text-lg 
            cursor-pointer ${
              selectedNumber === item ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => {
              setSelectedNumber(item);
              setWarning(false);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Numbers;
