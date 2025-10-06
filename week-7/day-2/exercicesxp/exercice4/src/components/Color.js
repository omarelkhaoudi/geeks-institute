import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  // useEffect est déclenché après chaque rendu
  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); // ← se déclenche quand favoriteColor change

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor} className="btn btn-primary">
        Change Color
      </button>
    </div>
  );
};

export default Color;
