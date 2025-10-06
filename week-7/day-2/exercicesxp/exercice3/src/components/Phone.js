import React, { useState } from "react";

function Phone() {
  // Déclaration des states
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  // Fonction pour changer la couleur
  const changeColor = () => {
    setPhone({ ...phone, color: "blue" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My Phone</h2>
      <p><strong>Brand:</strong> {phone.brand}</p>
      <p><strong>Model:</strong> {phone.model}</p>
      <p><strong>Color:</strong> {phone.color}</p>
      <p><strong>Year:</strong> {phone.year}</p>

      <button className="btn btn-primary" onClick={changeColor}>
        Change color to Blue
      </button>
    </div>
  );
}

export default Phone;
