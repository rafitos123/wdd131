//current year
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

//last modification
const oLastModif = new Date(document.lastModified);
const last = document.querySelector("#lastModified");

const lastDate = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
last.innerHTML = `Last Modification: <span>${oLastModif.toLocaleString('en-US', lastDate)}</span>`;



//Temperature and WindChill
let temperature = 20;
let windSpeed = 17;


const calculateWindchill = (temperature, windSpeed) => { return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);};
let windchill;


if (temperature > 10) {
    windchill = "N/A";
} else {
    windchill = calculateWindchill(temperature, windSpeed).toFixed(2);
}


document.getElementById("windchill").innerText = windchill + "°C";
document.getElementById("temperature").innerText = temperature + "°C";
document.getElementById("wind").innerText = windSpeed + " km/h";