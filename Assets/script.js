let currentCity;
let userSearch; 
$(document).ready(function () {
    $("#searchBtn").click(function () {
        userSearch = $('#searchBar').val();
        locationFetch(userSearch); 
    });
});
var pastSearch = JSON.parse(localStorage.getItem('pastSearch')) || [];
var apiKey = '86b659b4340d86c936cd439ce4e7e614';
// $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
setInterval(function (){$('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));}, 1000);

pastSearch.forEach( cities => {
    console.log(cities)
   var cityList = $('#pastCities').append($('<li></li>'));
    cityList.text(cities); 
    console.log(cityList)
});

function locationFetch(searchRequest){
    var url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchRequest}&limit=1&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => searchFunction(data));
}



function searchFunction(resultObj) {
    console.log(resultObj)
    var lon = resultObj[0].lon;
    var lat = resultObj[0].lat;
    currentCity = resultObj[0].name;
    pastSearch = JSON.parse(localStorage.getItem('pastSearch')) || [];
    var arrayCity = [
        ...pastSearch,
        currentCity
    ]
    localStorage.setItem('pastSearch', JSON.stringify(arrayCity));
    var searchURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    fetch(searchURL)
    .then(response => response.json())
    .then(data => weatherPrint(data));
}

function weatherPrint(resultObj) {
    console.log(resultObj)
    $('#currentCity').text(currentCity);
    $('#temp').text(resultObj.current.temp);
    $('#wind').text(resultObj.current.wind_speed);
    $('#hum').text(resultObj.current.humidity);
    $('#uv').text(resultObj.current.uvi);
    fiveDays(resultObj);


}

function fiveDays(resultObj) {

    for (let i = 1; i < 6; i++) {
        $(`#day${i}`).text(moment().add(i, 'days').format('MMMM Do YYYY'));
        $(`#day${i}`).append(`<p>Temperature: ${resultObj.daily[i].temp.day}</p>`)
        $(`#day${i}`).append(`<p>Wind: ${resultObj.daily[i].wind_speed}</p>`)
        $(`#day${i}`).append(`<p>Humidity: ${resultObj.daily[i].humidity}</p>`)
        $(`#day${i}`).append(`<p>UV: ${resultObj.daily[i].uvi}</p>`)

    }
}

