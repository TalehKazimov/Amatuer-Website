import React from "react";
import { useState } from "react";
function AddBlog() {
    const [blogs, setBlogs] = useState({
        name: "",
        image: "",
        describe: "",
        date: "",
      });
      const handleInput = (e) => {
        setBlogs({ ...blogs, [e.target.name]: e.target.value });
      };
      const handleUpload = (e) => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
          //   console.log(reader.result);
          setBlogs({ ...blogs, [e.target.name]: reader.result });
        });
        reader.readAsDataURL(e.target.files[0]);
      };
      const submit = (e) => {
        e.preventDefault();
        fetch(" http://localhost:3169/blogs", {
          method: "POST",
    
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogs),
        });
      };
  return (
    <div id="admin">
      <label>
        <p>Adı:</p>
        <input onChange={handleInput} id="name" type="text" name="name" />
      </label>
      <label>
        <p>Tarix</p>
        <input onChange={handleInput} id="name" type="text" name="date" />
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
      <button onClick={(e) => submit(e)}>Gonder</button>
    </div>
  );
}

export default AddBlog;
