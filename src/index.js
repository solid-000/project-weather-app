"use strict";
import "./styles.css";
import { fetchCity, getWeatherInfo } from "./modules/fetch";

window.onload = fetchCity();

document.querySelector(".search button").addEventListener("click", () => {
  let search = document.querySelector(".search input");
  getWeatherInfo(search.value);
});
