import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function AddResept() {
  const [type, setType] = useState([]);
  const [resept, setResept] = useState({
    name: "",
    image: "",
    describe: "",
    price: "",
    type:"",
  });
  const handleInput = (e) => {
    setResept({ ...resept, [e.target.name]: e.target.value });
  };
  const handleUpload = (e) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      //   console.log(reader.result);
      setResept({ ...resept, [e.target.name]: reader.result });
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(resept);
    fetch(" http://localhost:3169/reseptler", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resept),
    });
  };
  useEffect(() => {
    const getTypes = async () => {
      let dataTypes = await fetch("http://localhost:3169/types").then((a) =>
        a.json()
      );
      setType(dataTypes);
    };
    getTypes();
  }, []);
  return (
    <div id="admin">
      <label>
        <p>Adı:</p>
        <input onChange={handleInput} id="name" type="text" name="name" />
      </label>
      <label>
        <p>Qiymeti</p>
        <input onChange={handleInput} id="name" type="number" name="price" />
      </label>
      <label>
        <p>Haqqinda :</p>
        <textarea
          onChange={handleInput}
          id="describe"
          type="text"
          name="describe"
        ></textarea>
      </label>
      <label>
        <p>Image</p>
        <input onChange={handleUpload} id="name" type="file" name="image" />
      </label>
      <select defaultValue="1" onChange={handleInput} name="type">
        {type.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
      <button onClick={(e) => submit(e)}>Gonder</button>
    </div>
  );
}

export default AddResept;
