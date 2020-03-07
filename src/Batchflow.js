import React, { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
const MAIN_PATH = "http://127.0.0.1:8080";
const JSON = ".json";

const Batchflow = ({ region }) => {
  const svgRef = useRef(null);

  const [result, setResult] = useState([]);

  const drawFlow = () => {
    const tree = d3.hierarchy(result,d => d.children);
    // const svgElement = d3.select(svgRef).append("svg").attr([800,600]);
    const treeLinks = tree.links();
    console.log("New: " + treeLinks);
  };

  useEffect(() => {
    fetch(`${MAIN_PATH}/${region}${JSON}`)
      .then(result => result.json())
      .then(response => setResult(response))
  }, []);

  useEffect(() => {
    drawFlow();
  });

  return <div ref={svgRef} />;
};

export default Batchflow;
