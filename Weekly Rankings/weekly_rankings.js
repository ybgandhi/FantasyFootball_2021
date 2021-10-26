// use this file to manipulate json data

d3.json("/outputs/test2.json").then(function(data){
    console.log(data);
});

// chart
var addChart = function(x_data, y_data, hoverText, metadata) {
    var metadata_panel = d3.select("chart");
    metadata_panel.html("");
    Object.entries(metadata).forEach(([key, value])=>{
        metadata_panel.append("p").text(`${key}: ${value}`);
    });

    var trace = {
        x: x_data,
        y: y_data,
        text: hoverText,
        type: 'bar',
        orientation: 'h'
    };
    
    var data = [trace];

    Plotly.newPlot('bar', data);

    var trace2 = {
        x: x_data,
        y: y_data,
        text: hoverText,
        mode: 'markers',
        marker: {
            size: y_data,
            color: x_data
        }
    };

    var data2 = [trace2];

    Plotly.newPlot('bubble', data2);


};