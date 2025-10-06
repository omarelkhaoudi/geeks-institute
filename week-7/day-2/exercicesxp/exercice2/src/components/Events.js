import React, { useState } from "react";

const Events = () => {
  // Part I - clickMe function
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II - handleKeyDown
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You typed: ${event.target.value}`);
    }
  };

  // Part III - Toggle ON / OFF
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn); // inverse la valeur
  };

  return (
    <div className="m-4">
      {/* Part I */}
      <h2>Part I : Click Event</h2>
      <button onClick={clickMe} className="btn btn-primary m-2">
        Click Me
      </button>

      {/* Part II */}
      <h2>Part II : KeyDown Event</h2>
      <input
        type="text"
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}
        className="form-control w-50 m-2"
      />

      {/* Part III */}
      <h2>Part III : Toggle Button</h2>
      <button onClick={handleToggle} className="btn btn-warning m-2">
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Events;
