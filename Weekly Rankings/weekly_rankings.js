// use this file to manipulate json data




// JSON Data Path
const path = "./outputs/test2.json";

// load table into console log
d3.json(path).then(function(week){
     console.log(week);
     console.log(Object.keys(week));
     console.log(Object.values(week));
     console.log(Object.entries(week));
     console.log(Object.values(week[1].Name));
     var Weeks = {}

     for (var i=0;i<week.length;i++) {
        Weeks[d[i].Team=d[i].Team]
        console.log(Weeks[d[i].Team])
     };
    // console.log(playerNames);
//     var my_JSON_object = JSON.parse(data.Name);
//     alert (my_JSON_object[0]);
});
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
