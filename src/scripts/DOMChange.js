let box1 = document.querySelectorAll(".box-1");
let maxTemp = document.querySelectorAll(".up-text");
let minTemp = document.querySelectorAll(".down-text");
let moonShape = document.querySelectorAll(".moon-shape");
let pressureText = document.querySelectorAll(".pressure-text");
let weatherIcon = document.querySelectorAll(".weather-icon");
let chanceOfRain = document.querySelectorAll(".chance");
let speedOfWind = document.querySelectorAll(".speed");

export function DOMChange(data) {
    console.log(data);
    for (let i = 1; i < 8; i++) {
        let day = new Date(data.days[i].datetime);
        day = day.getDay();
        switch (day) {
            case 1:
                box1[i - 1].innerHTML = "MON";
                break;
            case 2:
                box1[i - 1].innerHTML = "TUE";
                break;
            case 3:
                box1[i - 1].innerHTML = "WEN";
                break;
            case 4:
                box1[i - 1].innerHTML = "THU";
                break;
            case 5:
                box1[i - 1].innerHTML = "FRI";
                break;
            case 6:
                box1[i - 1].innerHTML = "SAT";
                break;
            case 0:
                box1[i - 1].innerHTML = "SUN";
                break;
        }

        maxTemp[i - 1].innerHTML = data.days[i].tempmax + " °C";
        minTemp[i - 1].innerHTML = data.days[i].tempmin + " °C";

        let moonChange = data.days[i].moonphase;
        console.log(moonChange);
        switch (true) {
            case moonChange == 0:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-new.svg";
                break;
            case moonChange < 0.25:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-waxing-crescent.svg";
                break;
            case moonChange == 0.25:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-first-quarter.svg";
                break;
            case moonChange < 0.5:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-waxing-gibbous.svg";
                break;
            case moonChange == 0.5:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-full.svg";
                break;
            case moonChange < 0.75:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-waning-gibbous.svg";
                break;
            case moonChange == 0.75:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-last-quarter.svg";
                break;
            case moonChange < 1:
                moonShape[i - 1].src =
                    "../images/icons/moon-shapes/moon-waning-crescent.svg";
                break;
        }

        pressureText[i - 1].innerHTML = data.days[i].pressure + " hPa";
        chanceOfRain[i - 1].innerHTML = data.days[i].humidity + "%";
        speedOfWind[i - 1].innerHTML = data.days[i].windspeed + "km/h";

        weatherIcon[i - 1].src =
            "../images/icons/weather-icons/" + data.days[i].icon + ".svg";
    }

    //current day data
    document.querySelector(".current-city").innerHTML = data.resolvedAddress;

    document.querySelector(".today-up-text").innerHTML =
        data.currentConditions.temp + " °C";

    let currentMoonChange = data.currentConditions.moonphase;
    let todayMoon = document.querySelector(".today-moon-shape");
    switch (true) {
        case currentMoonChange == 0:
            todayMoon.src = "../images/icons/moon-shapes/moon-new.svg";
            break;
        case currentMoonChange < 0.25:
            todayMoon.src =
                "../images/icons/moon-shapes/moon-waxing-crescent.svg";
            break;
        case currentMoonChange == 0.25:
            todayMoon.src =
                "../images/icons/moon-shapes/moon-first-quarter.svg";
            break;
        case currentMoonChange < 0.5:
            todayMoon.src =
                "../images/icons/moon-shapes/moon-waxing-gibbous.svg";
            break;
        case currentMoonChange == 0.5:
            todayMoon.src = "../images/icons/moon-shapes/moon-full.svg";
            break;
        case currentMoonChange < 0.75:
            todayMoon.src =
                "../images/icons/moon-shapes/moon-waning-gibbous.svg";
            break;
        case currentMoonChange == 0.75:
            todayMoon.src = "../images/icons/moon-shapes/moon-last-quarter.svg";
            break;
        case currentMoonChange < 1:
            todayMoon.src =
                "../images/icons/moon-shapes/moon-waning-crescent.svg";
            break;
    }

    document.querySelector(".today-pressure-text").innerHTML =
        data.currentConditions.pressure + " hPA";

    document.querySelector(".today-chance").innerHTML =
        data.currentConditions.humidity + "%";

    document.querySelector(".today-speed").innerHTML =
        data.currentConditions.windspeed + "km/h";

    document.querySelector(".today-weather-icon").src =
        "../images/icons/weather-icons/" + data.currentConditions.icon + ".svg";

    maptilersdk.config.apiKey = "lXx3JZOCTnjVRIPNjp8W";
    const map = new maptilersdk.Map({
        container: "map", // container's id or the HTML element to render the map
        style: "streets-v2",
        center: [data.longitude, data.latitude], // starting position [lng, lat]
        zoom: 3, // starting zoom
    });
    var city = new maptilersdk.Marker()
        .setLngLat([data.longitude, data.latitude])
        .addTo(map);
}
