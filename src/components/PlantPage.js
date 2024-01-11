import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  // 1. create state variable and state setter function
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plant => setPlants(plant))
  }, []);

  function handleAddNewPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  // 7. update state when user types something into the search bar
  // inverse data flow - use a callback function
  function handleUpdateSearch(newSearch) {
    setSearchTerm(newSearch)
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant} />
      <Search searchTerm={searchTerm} onUpdateSearch={handleUpdateSearch} />

      // 4. pass down searchTerm to PlantList
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
