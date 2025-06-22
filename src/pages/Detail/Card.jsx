import React from "react";

const Card = ({ item }) => {
  return (
    <div className="p-5 mt-4 text-black rounded-md border">
      <p className="mb-2 text-sm font-semibold capitalize">{item[0]}</p>
      <p className="text-lg">{item[1]}</p>
    </div>
  );
};

export default Card;
