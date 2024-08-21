let box1 = document.querySelectorAll(".box-1");
let maxTemp = document.querySelectorAll(".up-text");
let minTemp = document.querySelectorAll(".down-text");
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
    }
}
