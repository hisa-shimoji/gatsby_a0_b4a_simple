import React, { useState } from "react";
import Parse from "parse";

const ListMemo = (props) => {
  const [memo, setMemo] = useState([]);

  const btListMemo = () => {
    const MemoClass = Parse.Object.extend("MemoClass");
    const query = new Parse.Query(MemoClass);
    query.find().then(
      (result) => {
        setMemo(result)
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <>
      <div>
        <button onClick={btListMemo}>ListMemo</button>
      </div>
      <div>
          {memo.map((melem) => {
            return <div>{melem.attributes.title}</div>
          })}
      </div>
    </>
  );
};

export default ListMemo;
