import React from "react";

const HeadLoader = () => {
  return (
    <div data-testid="headLoader" className="flex gap-2 items-center">
      <div className="bg-gray-300 h-10 w-[120px] rounded-md animate-pulse" />

      <div className="w-16 h-10 bg-gray-300 rounded-md animate-pulse" />
    </div>
  );
};

export default HeadLoader;
