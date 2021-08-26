import React, { useState } from "react";
import "./App.css";

const COLORS = ["white", "siamese", "orange", "tabby", "siamese", "black", "tortoiseshell", "calico"];

function RegisterYourCatForm() {
  const [values, setValues] = useState({
    name: "",
    color: "",
    age: "",
    habits: ""
  });

  console.log(values);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <form>
      <h2>Register Your Cat</h2>

      <label>Name*:</label>
      <input
        type="text" required
        value={values.name} onChange={set("name")}
      />

      <label>Color*:</label>
      <select 
        required
        value={values.color} onChange={set("color")}
      >
        <option value="">Select color</option>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>Age*:</label>
      <input
        type="number" required min="1"
        value={values.age} onChange={set("age")} 
      />
      <label>Habits:</label>
      <textarea value={values.habits} onChange={set("habits")} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <RegisterYourCatForm />
    </div>
  );
}