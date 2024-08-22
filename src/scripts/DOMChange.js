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
    let currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = data.resolvedAddress;
}
