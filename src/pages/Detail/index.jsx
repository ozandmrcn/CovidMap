import React, { useEffect } from "react";
import Head from "./Head";
import Content from "./Content";
import { useDispatch } from "react-redux";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(getDetails(country));
  };

  useEffect(() => {
    getData();
  }, [country]);
  return (
    <div className="grid flex-1 place-items-center p-6 text-white">
      <div className="bg-white border shadow-2xl min-h-[80%] py-6 px-8 rounded-lg max-w-4xl max-md:w-full md:w-[80%]">
        <Head />

        <Content getData={getData} />
      </div>
    </div>
  );
};

export default Detail;
