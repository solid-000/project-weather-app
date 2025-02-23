"use strict";
import "./styles.css";

let userLocation = {};

const getPosition = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => resolve(pos),
    (err) => reject(err)
  );
});
getPosition
  .then((position) => {
    fetchCity(position);
  })
  .catch((err) => console.log(err.message));

async function fetchCity(position) {
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  let data = await response.json();
  userLocation = {
    city: data.address.county,
    country: data.address.country,
  };
  getWeatherInfo(userLocation.city);
}

async function getWeatherInfo(city) {
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=ZSSFTJNCCFT6YGSSHS6WJEN4U&contentType=json`,
    { mode: "cors" }
  );
  let data = await response.json();
  console.log(data);
}
