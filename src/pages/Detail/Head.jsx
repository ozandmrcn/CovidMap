import React from "react";
import { MdKeyboardArrowLeft as Arrow } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeadLoader from "../../components/Loader/HeadLoader";

const Head = () => {
  // Subscribe to the store
  const { isLoading, data } = useSelector((state) => state.covidSlice);

  return (
    <div className="flex justify-between items-center">
      <Link
        to={"/"}
        className="flex gap-2 items-center px-2 py-2 rounded-md shadow bg-zinc-400 pe-3 hover:bg-zinc-500"
      >
        <Arrow />
        Back
      </Link>

      {isLoading ? (
        <HeadLoader />
      ) : (
        data && (
          <div className="flex gap-4 items-center">
            <h1 className="font-sans text-2xl font-bold text-gray-900 lg:text-3xl">
              {data.country}
            </h1>

            <img
              src={data.flag.png}
              alt={data.flag.alt}
              className="w-16 rounded drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Head;
