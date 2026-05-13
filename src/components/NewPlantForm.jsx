import React, { useState } from "react";

function NewPlantForm({ handleAddPlant }) {

  // https://hips.hearstapps.com/hmg-prod/images/grass-close-up-royalty-free-image-97719001-1553618759.jpg?crop=0.53345xw:1xh;center,top

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {

    e.preventDefault()

    const newPlant = {

      "name": name,
      "image": image,
      "price": price

    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then(r => {

      if (!r.ok) {throw new Error("ERROR!")}

      return r.json()

    })
    .then(data => {

      handleAddPlant(data)

    })
    .catch(err => console.log(err))

    

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
