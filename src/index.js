"use strict";
import "./styles.css";
export { populateDom };
import { fetchCity, getWeatherInfo } from "./modules/fetch";

window.onload = fetchCity();

async function populateDom(data) {
  document.querySelector(".city").textContent = data.address;
  document.querySelector(".today-temp").textContent =
    `${data.currentConditions.temp}\u00B0`;

  const timeCards = document.querySelectorAll(".time-card");
  let time = 6;
  for (let i = 0; i < timeCards.length; i++) {
    timeCards[i].querySelector(".time-temp").textContent =
      `${data.days[0].hours[time].temp}\u00B0`;
    time += 3;
  }

  document.querySelector(".feel").querySelector(".value").textContent =
    `${data.currentConditions.feelslike}\u00B0`;

  document.querySelector(".wind").querySelector(".value").textContent =
    `${data.currentConditions.windspeed} km/h`;

  document.querySelector(".cloud").querySelector(".value").textContent =
    `${data.currentConditions.cloudcover}%`;

  document.querySelector(".uv").querySelector(".value").textContent =
    `${data.currentConditions.uvindex}`;
}
