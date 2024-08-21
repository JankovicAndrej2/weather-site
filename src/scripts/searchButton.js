let searchIcon = document.querySelector(".search-icon");
let input = document.querySelector("#city");
let errorBox = document.querySelector(".error-box");

import { DOMChange } from "./DOMChange.js";

//default fetch Osijek
fetchCityData("osijek").then(function (result) {
    if (result != undefined) {
        //city is ok, continue
        DOMChange(result);

        input.value = "";
    } else {
        //city input is invalid, open box
        errorBox.style.display = "flex";
        //disable keyboard
        document.onkeydown = function (e) {
            return false;
        };
    }
});

searchIcon.addEventListener("click", () => {
    if (input.value != "") {
        fetchCityData(input.value).then(function (result) {
            if (result != undefined) {
                //city is ok, continue
                DOMChange(result);
                input.value = "";
            } else {
                //city input is invalid, open box
                errorBox.style.display = "flex";
                //disable keyboard
                document.onkeydown = function (e) {
                    return false;
                };
            }
        });
    }
});
//fetches data from visual crossing for last 15 days
async function fetchCityData(cityName) {
    try {
        const data = await fetch(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
                cityName +
                "?key=43Q4WDFV8SE7G2BPQ3LVEP438&unitGroup=metric",
            { mode: "cors" }
        );
        const data2 = await data.json();
        return data2;
    } catch (error) {
        console.log(error);
    }
}

//closing box for wrong input
let closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
    errorBox.style.display = "none";

    //enable keyboard
    document.onkeydown = function (e) {
        return true;
    };
});
