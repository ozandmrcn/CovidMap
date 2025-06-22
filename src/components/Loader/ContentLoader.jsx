import React from "react";

const ContentLoader = () => {
  const arr = new Array(9).fill(".");

  return arr.map((i, index) => (
    <div
      key={index}
      data-testid="contentLoader"
      className="p-5 mt-4 text-transparent text-black bg-gray-100 rounded-md border shadow animate-pulse select-none"
    >
      <div>.</div>
      <div>.</div>
    </div>
  ));
};

export default ContentLoader;
