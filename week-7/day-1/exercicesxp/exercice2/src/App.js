import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

function App() {
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"]
  };

  return (
    <div className="App">
      {/* Display first and last name */}
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>

      {/* Pass favAnimals to the class component */}
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;
