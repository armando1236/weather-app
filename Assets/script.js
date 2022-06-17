var url = `http://api.openweathermap.org/geo/1.0/direct?q=austin&limit=1&appid=86b659b4340d86c936cd439ce4e7e614`;
// var url = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=1&appid=${apiKey}`;
var apiKey = '86b659b4340d86c936cd439ce4e7e614';
var userSearch = 'austin'
fetch(url)
.then(response =>response.json())
.then(data =>searchFunction(data));



function searchFunction(resultObj) {
    console.log(resultObj)
    var lon = resultObj[0].lon;
    var lat = resultObj[0].lat;
    var searchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(searchURL)
    .then(response =>response.json())
    .then(data =>console.log(data));
}


// addEventListener(("click"),$('#searchBtn')) {
    
// }