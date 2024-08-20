let searchIcon = document.querySelector(".search-icon");
let input = document.querySelector("#city");

searchIcon.addEventListener("click", () => {
    if (input.value != "") {
        fetchCityData(input.value).then(function (result) {
            if (result != undefined) {
                //city is ok
            } else {
                //city is nok
            }
        });
    }
});

async function fetchCityData(cityName) {
    try {
        const data = await fetch(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
                cityName +
                "?key=43Q4WDFV8SE7G2BPQ3LVEP438",
            { mode: "cors" }
        );
        const data2 = await data.json();
        return data2;
    } catch (error) {
        console.log(error);
    }
}
