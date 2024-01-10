import React, { useState } from "react";

function PlantCard({ plant }) {
  // Deliverable #3
  // 1. add state variable and state setter function
  const [isInStock, setIsInStock] = useState(true);

  const { name, image, price } = plant;

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      // 2. set state variable
      {isInStock ? (
        <button 
          className="primary"
          // 2. create an onClick function for both conditionals
          onClick={() => setIsInStock(false)}
          >In Stock</button>
      ) : (
        <button
          onClick={() => setIsInStock(true)}
          >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
