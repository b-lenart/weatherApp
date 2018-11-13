var apiKey = 'a2e65ce31be330f009f5fd707405cd58';
// let url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=' + apiKey;
//3094802-Cracow, 5128638-New York, 3372783-Ponta Delgada, 2643741-City of London
let url = 'http://api.openweathermap.org/data/2.5/group?id=2643741,3094802,5128638,3372783&units=metric&APPID=' + apiKey;

// console.log(url);

let requestWeather = new XMLHttpRequest();

console.log(`URL: ${url}`);

requestWeather.open('GET', url, true)
requestWeather.send()
// console.log();

const w1 = document.querySelector('.weather-info1');

const c1 = document.querySelector('.w-city1');
const c2 = document.querySelector('.w-city2');
const c3 = document.querySelector('.w-city3');

const time = document.querySelector('#time');

// function cityNameApi(cityName) {
//     return 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&APPID=a2e65ce31be330f009f5fd707405cd58';
// }

requestWeather.addEventListener('readystatechange', function(e) {
    console.log(`ReadyState: ${e.target.readyState}`);
    if(e.target.readyState =='4') {
        let rText = JSON.parse(e.target.responseText);
        console.log(rText.list[0]);

        w1.innerHTML = parseInt(rText.list[0].main.temp*10)/10 + ' &deg;C';
        c1.innerHTML = parseInt(rText.list[1].main.temp*10)/10 + ' &deg;C';
        c2.innerHTML = parseInt(rText.list[2].main.temp*10)/10 + ' &deg;C';
        c3.innerHTML = parseInt(rText.list[3].main.temp*10)/10 + ' &deg;C';
    }
});
