import React from "react";
import { useState } from "react";

function AddType() {
  const [type, setType] = useState({
    name:"",
  });
  const handleInput = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3169/types", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(type),
    });
  };
  return (
    <div id="admin">
      <label>
        <p>Adı:</p>
        <input onChange={handleInput} id="name" type="text" name="name" />
      </label>
      <button onClick={submit}>
          Gonder
        </button>
    </div>
  );
}

export default AddType;
