import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="writePage">
      <div className="content">
        <input type="text" placeholder="Title" id="" />

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
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Uload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name="cat" value="art" id="art " />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="Science" id="Science " />
            <label htmlFor="art">Science</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="Technology"
              id="Technology "
            />
            <label htmlFor="art">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="Design" id="Design " />
            <label htmlFor="art">Design</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="Cinema" id="Cenema " />
            <label htmlFor="art">Cinema</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="Food" id="Food " />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
