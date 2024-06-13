import { useState } from "react";
import { responseObj } from "../utils/mockData";
import CarContainer from "./CarContainer";

const Body = () => {
  const [listOfCars, setListOfCars] = useState(responseObj);

  const filterTopRatedCars = () => {
    const filteredCarList = listOfCars.filter((res) => res.score > 6);
    setListOfCars(filteredCarList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedCars}>
          Top Rated Cars🚗
        </button>
      </div>
      <div className="car-container">
        {listOfCars.map((carObj) => (
          <CarContainer key={carObj.id} resData={carObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
