import React from "react";

function FormComponent({ data, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sample form</h1>

        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
        <br />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />

        <b>Select your destination</b>
        <br />
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="France">France</option>
          <option value="USA">USA</option>
        </select>
        <br />

        <b>Dietary restrictions:</b>
        <br />
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={data.nutsFree}
            onChange={handleChange}
          />{" "}
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          />{" "}
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.vegan}
            onChange={handleChange}
          />{" "}
          Vegan
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Entered information:</h2>
        <p><i>Your name:</i> {data.firstName} {data.lastName}</p>
        <p><i>Your age:</i> {data.age}</p>
        <p><i>Your gender:</i> {data.gender}</p>
        <p><i>Your destination:</i> {data.destination}</p>
        <p>
          <i>Your dietary restrictions:</i>{" "}
          {[
            data.nutsFree && "Nuts free",
            data.lactoseFree && "Lactose free",
            data.vegan && "Vegan"
          ]
            .filter(Boolean)
            .join(", ")}
        </p>
      </div>
    </div>
  );
}

export default FormComponent;
