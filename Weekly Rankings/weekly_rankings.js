// use this file to manipulate json data

const path = "./outputs/test2.json";


d3.json(path).then(function(data){
    console.log(data);
});

// const dataPromise = d3.json(path);
// console.log("Data Promise: ", dataPromise);


// chart
// var addChart = function(x_data, y_data, hoverText, metadata) {
//     var metadata_panel = d3.select("chart");
//     metadata_panel.html("");
//     Object.entries(metadata).forEach(([key, value])=>{
//         metadata_panel.append("p").text(`${key}: ${value}`);
//     });

//     var trace = {
//         x: x_data,
//         y: y_data,
//         text: hoverText,
//         type: 'bar',
//         orientation: 'h'
//     };
    
//     var data = [trace];

//     Plotly.newPlot('bar', data);

//     var trace2 = {
//         x: x_data,
//         y: y_data,
//         text: hoverText,
//         mode: 'markers',
//         marker: {
//             size: y_data,
//             color: x_data
//         }
//     };

//     var data2 = [trace2];

//     Plotly.newPlot('bubble', data2);


// };