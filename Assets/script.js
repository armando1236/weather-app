var url = 'http://api.openweathermap.org/geo/1.0/direct?q=${userInput},3166&limit=1&appid=86b659b4340d86c936cd439ce4e7e614';
fetch(url)
.then(response =>response.json())
.then(data =>console.log(data));
dataFetch(data.response);

function dataFetch(data) {
    searchFunction(data);
    return [latitude, longitude]
}
function searchFunction(resultObj) {
    var longitude = dataObject.lon;
    var latitude = dataObject.lat;
    var searchURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=86b659b4340d86c936cd439ce4e7e614`;
    fetch(searchURL)
}

    