import React from "react";
// import './App.css';

import { select, csv } from "d3";

import { displaySkill } from "./displaySkill";

import './Skill.css';
import skillData from "./programming_languages.csv";

class Skill extends React.Component {
  componentDidMount() {
    this.d3Svg();
  }

  d3Svg() {
    let width = 960;
    let height = 500;

    const svg = select("svg")
    .attr("viewBox", `0 0 ${width} ${height}`);
    // const width = +svg.attr("width");
    // const height = +svg.attr("height");

    csv(skillData).then((data) => {
      // console.log(data);
      data.forEach((d) => {
        d.percentage = +d.percentage;
      });
      displaySkill(data, svg, width, height);
    });
  }

  render() {
    return (
      <div className="page skill-page">
        {/* width="960" height="500" */}
        <div className="svg-container">
        {/* style={{ border: "1px black solid" }} */}
          <svg></svg>
        </div>
      </div>
    );
  }
}

export default Skill;
