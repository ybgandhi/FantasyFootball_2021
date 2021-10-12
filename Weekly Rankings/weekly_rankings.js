// use this file to manipulate json data

// define SVG area dimension
var svgWidth = 960;
var svgHeight = 500;


// Define the chart's margins as an object
var chartMargin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;
var chart = d3.select("scatter").append("div").classed("chart", true);