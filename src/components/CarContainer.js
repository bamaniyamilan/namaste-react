const CarContainer = (props) => {
    const { resData } = props;
    return (
      <div className="car-card">
        <img
          className="car-logo"
          alt="car-logo"
          src={`https:${resData.images[0].file.moburl}`}
        />
        <h3>{resData.make + ", " + resData.model + ", " + resData.variant}</h3>
        <h4>
          {resData.make_year + " - " + " ₹ " + resData.price +" - " + resData.fuel_type}
        </h4>
        <h5>Rating :- {resData.score.toFixed(1)}</h5>
        <h5>City :- {resData.hub}</h5>
      </div>
    );
  };


  export default CarContainer;