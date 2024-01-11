import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  // 5. write filter function
  const filteredPlants = plants.filter(plantObj => {
    // check the name of the plant, return true if it matches the search term
    return plantObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  

  // 6. change plants => filteredPlants to only display plants from that search
  const plantCards = filteredPlants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  });
  
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
