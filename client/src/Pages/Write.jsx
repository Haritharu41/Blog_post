import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { axios } from "../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

function Write() {
  const state = useLocation().state;
  const Navigate = useNavigate();

  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e?.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });

      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="writePage">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
          />
          <label className="file" htmlFor="file">
            Uload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="art"
              id="art "
              checked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="science"
              id="science "
              checked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Science</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="technology"
              id="technology "
              checked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Technology</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="design"
              id="design "
              checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Design</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="cinema"
              id="cinema "
              checked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Cinema</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="food"
              id="food "
              checked={cat === "food"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
