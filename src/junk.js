import React, { useRef, useState, useEffect, Component } from "react";
import * as d3 from "d3";
const MAIN_PATH = "http://127.0.0.1:8080";
const JSON = ".json";

// const Batchflow = ({ region }) => {
//   const svgRef = useRef(null);

//   const [result, setResult] = useState([]);

//   const drawFlow = () => {
//     const tree = d3.hierarchy(result,d => d.children);
//     const svgElement = d3.select(svgRef).append("svg").attr([800,600]);
//     const treeLinks = tree.links();
//     console.log("New: " + treeLinks);
//   };

//   useEffect(() => {
//     fetch(`${MAIN_PATH}/${region}${JSON}`)
//       .then(result => result.json())
//       .then(response => setResult(response))
//   }, []);

//   useEffect(() => {
//     drawFlow();
//   });

//   return <div ref={svgRef} />;
// };

class Batchflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: []
    };
    this.drawBarChart = this.drawBarChart.bind(this);
  }

  drawBarChart(){
  }
  
  componentDidUpdate(){
    console.log("State:"+this.state.database);
    this.drawBarChart();
    const svg = d3.select(this.refs.svgRef).append("svg").attr([800,600]).style("border","1px solid black")
  }

  componentDidMount() {
    fetch(`${MAIN_PATH}/flow${JSON}`)
      .then(result => result.json())
      .then(response => this.setState({ database: response }));
  }

  render() {
    return <div ref="svgRef"></div>;
  }
}

export default Batchflow;
