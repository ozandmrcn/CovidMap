import React, { useEffect, useState } from "react";
import { totalApi } from "../../utils/api";
import Loader from "./../../components/Loader/index";
import Item from "./Item";
import millify from "millify";

const Statistics = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    totalApi
      .get("/reports/total", { params: { date: "2023-01-01" } })
      .then((res) => setData(res.data.data))
      .catch((err) => setIsError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container py-0">
      <div className="bg-white shadow-lg rounded-xl p-5 grid grid-cols-3 gap-5 mt-[-34px] md:mt-[-48px]">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p>Sorry... an error acquaired</p>
        ) : (
          data && (
            <>
              <Item
                data-testid="item"
                color="text-pink-500"
                text="Total Cases"
                value={millify(data.confirmed)}
              />

              <Item
                color="text-green-500"
                text="Active Case"
                value={millify(data.active)}
              />

              <Item
                color="text-gray-500"
                text="Total Deaths"
                value={millify(data.deaths)}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Statistics;
