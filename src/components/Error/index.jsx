import React from "react";

const Error = ({ info, refetch }) => {
  return (
    <div
      data-testid="error"
      className="flex col-span-3 justify-center my-20 h-full text-center w-[100%] flex-col gap-10"
    >
      <div className="p-5 bg-red-400 rounded-md">
        <p>We are sorry, an error acquired:</p>

        <p>{info}</p>
      </div>

      <button onClick={refetch} className="p-2 mt-10 text-black border shadow">
        Try Again
      </button>
    </div>
  );
};

export default Error;
