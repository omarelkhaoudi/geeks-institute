import React from "react";
import Car from "./components/Car";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <Car carInfo={carinfo} />
    </div>
  );
}

export default App;
