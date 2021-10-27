// use this file to manipulate json data

var url = "https://github.com/ybgandhi/FantasyFootball_2021/blob/31b5e9a9aa4a054559ff95878646e4387b4face1/Weekly%20Rankings/outputs/test2.json";
d3.json(url).then( function (d){
    console.log(d);
})




// JSON Data Path
// const path = "./outputs/test2.json";

// // load table into console log
// d3.json(path).then(function(data){
//     console.log(data);
//     var my_JSON_object = JSON.parse(data.Name);
//     alert (my_JSON_object[0]);
// });


// d3.open("GET",path, false);
// d3.send(null)
// var my_JSON_object = JSON.parse(request.responseText);
// alert (my_JSON_object[0]);

// d3.json(path).then(function(data){

//         // Grab values from the data json object to build plots
//         var name = data.dataset.Name;
//         console.log(data.dataset.Name);
        //var team = data.dataset.Team;



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