import React, { useState, useEffect } from "react";
import { silentAuth } from "./src/utils/auth";

const SessionCheck = (inputElem) => {
  const [ld, setLd] = useState(true);

  useEffect(() => {
    silentAuth(() => {
      setLd(false);
    });
  }, []);

  return <>{ld ? <div></div> : inputElem.children}</>;
};

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>;
};
