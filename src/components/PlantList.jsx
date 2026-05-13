import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants } ) {
  return (
    <ul className="cards">

      {plants.length > 0 ? 
      
      plants.map((plant) => {

        return <PlantCard key={plant.id} plant={plant} />

      }) : <p>No Plants</p>}

    </ul>
  );
}

export default PlantList;
