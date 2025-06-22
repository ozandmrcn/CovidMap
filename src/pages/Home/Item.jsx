import React from "react";
import { PiVirus } from "react-icons/pi";

const Item = ({ color, text, value }) => {
  return (
    <div className="flex items-center gap-4">
      <PiVirus data-testid="icon" className={`${color} text-2xl md:text-5xl`} />

      <div>
        <span className="text-xl text-gray-500 lg:text-sm max-md:hidden">
          {text}
        </span>

        <h2 className="text-lg md:text-2xl">{value}</h2>
      </div>
    </div>
  );
};

export default Item;
