import { populateDom } from "./dom";
export { fetchCity, getWeatherInfo };

function geoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    document.querySelector(".error").classList.remove("hidden");
  });
}

let unit = "metric";

async function fetchCity() {
  let position = await geoLocation();
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  let data = await response.json();
  let userLocation = {
    city: data.address.county,
    country: data.address.country,
  };
  getWeatherInfo(userLocation.city);
}

async function getWeatherInfo(city) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=ZSSFTJNCCFT6YGSSHS6WJEN4U&contentType=json`,
      { mode: "cors" }
    );
    let data = await response.json();
    populateDom(data);
    document.querySelector(".search input").value = "";
    document.querySelector(".error").classList.add("hidden");
  } catch (error) {
    alert("Invalid city name");
  }
}
