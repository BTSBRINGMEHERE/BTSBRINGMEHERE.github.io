const API_KEY = "a16369a695a70a1db1e2486bfdd5f942";

function onGeoSucces(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText   = `${data.weather[0].main} / ${data.main.temp}🌡`;
        });
}


function onGeoError() {
    alert("여기가 어디여, 뭔 근씨여.")
}

navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);