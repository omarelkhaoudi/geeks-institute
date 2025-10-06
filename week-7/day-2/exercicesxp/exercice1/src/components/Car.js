import React, { useState } from "react";
import Garage from "./Garage";

const Car = ({ carInfo }) => {
  const [color, setColor] = useState("red"); // état initial

  return (
    <div>
      <h2>
        This car is {color} {carInfo.model}
      </h2>
      <Garage size="small" />
    </div>
  );
};

export default Car;
