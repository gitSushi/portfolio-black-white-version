import React from 'react';
// import './App.css';

import { select, csv } from 'd3';

import { displaySkill } from './displaySkill';

import skillData from './programming_languages.csv';

class Skill extends React.Component {

  componentDidMount(){
    this.d3Svg();
  }

  d3Svg(){
    const svg = select('svg');
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    csv(skillData).then(data => {
        console.log(data);
        data.forEach(d => {
            d.percentage = +d.percentage
        });
        displaySkill(data, svg, width, height);
    });
  }

  render(){
    return (
      <div>
        <svg width="960" height="500" style={{ border:'1px black solid' }}></svg>
      </div>
    );
  }
}

export default Skill;
