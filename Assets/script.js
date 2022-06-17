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
    var searchURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    fetch(searchURL)
    .then(response =>response.json())
    .then(data =>weatherPrint(data));
}

function weatherPrint(resultObj) {
console.log(resultObj)
$('#temp').text(resultObj.current.temp);
$('#wind').text(resultObj.current.wind_speed);
$('#hum').text(resultObj.current.humidity);
$('#uv').text(resultObj.current.uvi);
fiveDays (resultObj);


}
function fiveDays (resultObj) {
    
    for (let i = 1; i < 6; i++) {
$(`#day${i}`).append(`<p>Temperature: ${resultObj.daily[i].temp.day}</p>`)
$(`#day${i}`).append(`<p>Wind: ${resultObj.daily[i].wind_speed}</p>`)
$(`#day${i}`).append(`<p>Humidity: ${resultObj.daily[i].humidity}</p>`)
$(`#day${i}`).append(`<p>UV: ${resultObj.daily[i].uvi}</p>`)
        
    }
}
// addEventListener(("click"),$('#searchBtn')) {
    
// }