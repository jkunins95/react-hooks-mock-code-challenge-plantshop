import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plant => setPlants(plant))
  }, []);

  function handleAddNewPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
