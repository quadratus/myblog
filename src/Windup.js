import React from "react";
import { useWindupString } from "windups";

function Windup() {
  const [text] = useWindupString("Hello World!");
  console.log(typeof text);
  return <div style={{ margin: "0 auto" }}>{text}</div>;
}

export default Windup;
