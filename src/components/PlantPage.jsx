import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetch("http://localhost:6001/plants")
    .then(r => {

      if(!r.ok) {throw new Error("ERROR!")}

      return r.json()

    })
    .then(data => {

      console.log(data)
      setPlants(data)

    })

  }, [])

  const filteredPlants = plants.filter((plant) => {

    const plantName = plant.name.toLowerCase()

    return plantName.includes(search.toLowerCase())

  })

  function handleAddPlant(newPlant) {

    setPlants(prevPlant => [...prevPlant, newPlant])

  }

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
