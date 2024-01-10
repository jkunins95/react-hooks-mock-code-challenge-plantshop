import React from "react";

// 8. update state by creating prop from PlantPage.js
function NewPlantForm({ onAddNewPlant }) {
  // 1. Set up initial state for each input
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // function handleChange(e) {
  //   setName(e.target.value);
  // }

  // 5. create a handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    // 6. set up the data that will go to the backend
    const formData = {
      "name": name,
      "image": image,
      "price": parseInt(price)
    };
    // 7. send the POST request
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    // 9. update state on web app
    .then(newPlant => onAddNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      // 4. set up handleSubmit event
      <form onSubmit={handleSubmit}>
        // 2. connect the value to the state variable
        // 3. handle the onChange={() => setValue(e.target.value)}
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
