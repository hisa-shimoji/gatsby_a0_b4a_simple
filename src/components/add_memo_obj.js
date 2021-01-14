import React, { useState } from "react";
import Parse from "parse";

const AddMemo = (props) => {
  const [mtitle, setMtitle] = useState("");
  const [mcontent, setMcontent] = useState("");

  const btAddMemo = (event) => {
    event.preventDefault();
    const MemoClass = Parse.Object.extend("MemoClass");
    const memoClass = new MemoClass();

    memoClass.set("title", mtitle);
    memoClass.set("content", mcontent);
    memoClass.save().then(
      (object) => {
        alert("New obj created Id: " + object.id);
      },
      (error) => {
        alert("Error: " + error.message);
      }
    );
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title":
        setMtitle(event.target.value);
        break;
      case "content":
        setMcontent(event.target.value);
        break;
      default:
        console.log("no value changed");
    }
  };

  return (
    <>
      <form onSubmit={btAddMemo}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={mtitle}
            onChange={handleChange}
          />
        </label>
        <label>
          content:
          <input
            type="text"
            name="content"
            value={mcontent}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddMemo;
