import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  const navigate = useNavigate();

  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const redirect = (geo) => {
    if (geo.properties.name.toLowerCase() === "united states of america") {
      navigate(`/detail/usa`);
    } else {
      navigate(`/detail/${geo.properties.name.toLowerCase()}`);
    }
  };

  return (
    <div className="container p-0 mt-10 mb-20">
      <h1 className="px-5 pb-5 text-2xl font-semibold">Select Country</h1>

      <div className="bg-gray-200 border shadow-lg md:rounded-xl">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => redirect(geo)}
                    style={{
                      default: { fill: "white", stroke: "gray" },
                      hover: { fill: "#DB2777" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
