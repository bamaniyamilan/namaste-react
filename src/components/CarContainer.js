import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; // Import heart icons from react-icons

const CarContainer = (props) => {
  const { resData } = props;
  const makeModelVariant = `${resData.make}, ${resData.model}, ${resData.variant}`;
  const [isFilled, setIsFilled] = useState(false); // State to manage heart fill

  const handleHeartClick = () => {
    setIsFilled(!isFilled); // Toggle heart fill state
  };

  return (
    <div className={`car-card ${isFilled ? 'filled' : ''}`}>
      <div className="badge">{resData.body_type.toUpperCase()}</div>
      <div className="heart-icon" onClick={handleHeartClick}>
        {isFilled ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
      <div className="car-logo-container">
        <img
          className="car-logo"
          alt="car-logo"
          src={`https:${resData.images[0].file.moburl}`}
        />
      </div>
      <div className="car-info">
        <h3>{makeModelVariant.toUpperCase()}</h3> {/* Display the text in uppercase */}
        <h4>
          {resData.make_year + " - " + " ₹ " + resData.price + " - " + resData.fuel_type}
        </h4>
        <h5>Rating :- {resData.score.toFixed(1)}</h5>
        <h5>City :- {resData.hub}</h5>
      </div>
    </div>
  );
};

export default CarContainer;
