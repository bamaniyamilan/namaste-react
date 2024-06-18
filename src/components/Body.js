import { useEffect, useState } from "react";
import CarContainer from "./CarContainer";

const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [listOfCars, setListOfCars] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterTopRatedCars = () => {
    const filteredCarList = listOfCars.filter((res) => res.score > 6);
    setListOfCars(filteredCarList);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("https://api.spinny.com/v3/api/listing/v3/?product_type=cars&category=used");
    const json = await data.json();
    setListOfCars(json?.results);
    setOriginalData(json?.results)
  };

  return listOfCars.length === 0 ? <h1>Loading...</h1> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-bar" value={searchText} onChange={(event) => {
            setSearchText(event.target.value)
          }} />
          <button onClick={() => {
            const searchedCars = listOfCars.filter((res) =>
               res.make.toLowerCase().includes(searchText.toLowerCase())
            );
            setOriginalData(searchedCars);
          }}
          >Search</button>
        </div>
        <button style={{ marginLeft: '10px' }} className="filter-btn" onClick={filterTopRatedCars}>
          Top Rated Cars
        </button>
      </div>
      <div className="car-container">
        {originalData.map((carObj) => (
          <CarContainer key={carObj.id} resData={carObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;