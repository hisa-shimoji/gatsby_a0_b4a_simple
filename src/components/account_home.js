import React from "react";

const Ahome = (props) => {

  return (
    <>
      Hi!, {props.usr.name ? props.usr.name : "friend"}!
    </>
  );
};

export default Ahome;
