import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import ContentLoader from "../../components/Loader/ContentLoader";
import Error from "./../../components/Error/index";

const Content = ({ getData }) => {
  // Subscribe to the store
  const { isLoading, error, data } = useSelector((state) => state.covidSlice);

  // Convert data object to an array
  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");

  return (
    <div className="grid gap-6 mt6 md:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} refetch={getData} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
