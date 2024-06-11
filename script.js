let inputbox = document.querySelector('.input-box');
let searchbtn = document.getElementById('searchbtn');
let wheather_img = document.querySelector('.wheather-img');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity = document.getElementById('humidity');
let wind_speed = document.getElementById('wind-speed');
let location_not_found = document.querySelector('.location-not-found');
let weather_body=document.querySelector('.wheather-body');

async function checkwheather(city) {
    const api_key = "f474891eacaecdc008209b541ecb5287";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    //fetch function are promises this function are return are fetch the information from the url , give response and we are convert this response into json format usting response.json  , we are write await and await are only use with the async function do we create also checkwheather function are async.

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    //we can chage the html data using innerhtml method first we fetch the data in wheather_data (in this variable store the all data regarding weather using api) and in json format the  data are in main -> temp( heare in this api temp are in the feranhit so we convert into temp using -273.15 and we use mathu function beacue provide the rounded value)



    // cod are provide a status code like 404 etc 

    if (weather_data.cod === `404`) {
        // location_not_found.style.display = "flex";
        alert("Enter correct location!!!");
        // console.log("error");
        return;

    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    // fetch data in wheathe attribute array in zero postion
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

    // for image change

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            wheather_img.src = "cloud.png";
            break;
        case 'Clear':
            wheather_img.src = "clear.png";
            break;
        case 'Rain':
            wheather_img.src = "rain.png";
            break;
        case 'Mist':
            wheather_img.src = "mist.png";
            break;
        case 'Snow':
            wheather_img.src = "snow.png";
            break;
    }


}

searchbtn.addEventListener('click', () => {
    checkwheather(inputbox.value)
})
