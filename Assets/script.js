// var url = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput},3166&limit=1&appid=86b659b4340d86c936cd439ce4e7e614`;
var url = `http://api.openweathermap.org/geo/1.0/direct?q=los20%angeles,3166&limit=1&appid=86b659b4340d86c936cd439ce4e7e614`;
var apiKey = '86b659b4340d86c936cd439ce4e7e614';
fetch(url)
.then(response =>response.json())
.then(data =>console.log(data));
searchFunction(data.response);


function searchFunction(resultObj) {
    var lon = resultObj.lon;
    var lat = resultObj.lat;
    var searchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(searchURL)
    .then(response =>response.json())
    .then(data =>console.log(data));
}


addEventListener(("click"),$('#searchBtn')) {
    
}