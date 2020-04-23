import {
    scaleLinear,
    scaleBand,
    max,
    axisBottom,
    axisLeft
} from 'd3';

import './Skill.css';

export const displaySkill = (data, selection, width, height) => {

    const xValue = d => d.percentage;
    const yValue = d => d.language;
    
    const margin = { top: 50, left: 150, bottom: 70, right: 40 };
    const innerWidth = width - (margin.left + margin.right);
    const innerHeight = height - (margin.top + margin.bottom);

    const title = 'SKILLS';
    const xAxisLabel = 'percentage';
    const yAxisLabel = 'language';
    
    const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth])
        .nice();
    
    const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.1);
    
    const g = selection.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
        
    const xAxis = axisBottom(xScale)
        .tickSize(-innerHeight);
    
    const yAxis = axisLeft(yScale);

    g.append('g')
        .call(yAxis)
        .selectAll('.domain, .tick line')
            .remove();
    
    const xAxisG = g.append('g').call(xAxis)
        .attr('transform', `translate(0, ${innerHeight})`);
        
    xAxisG.select('.domain').remove();
    xAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('x', innerWidth / 2)
            .attr('y', 59)
            .text(xAxisLabel);

    const yAxisG = g.append('g').call(yAxis);  
    yAxisG.selectAll('.domain, .tick line').remove();
    
    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('x', -innerHeight / 2)
        .attr('y', -120)
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);
    
    g.selectAll('rect').data(data)
    .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());
    
    selection.append('text')
        .attr('class', 'title')
        .attr('x', width / 2)
        .attr('y', 40)
        .text(title)
        .attr('text-anchor', 'middle');

};