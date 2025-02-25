"use strict";
import "./styles.css";
export { populateDom };
import { fetchCity, getWeatherInfo } from "./modules/fetch";

window.onload = fetchCity();

async function populateDom(data) {
  document.querySelector(".city").textContent = data.address;
  document.querySelector(".today-temp").textContent =
    `${data.currentConditions.temp}\u00B0`;
}
