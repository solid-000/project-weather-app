"use strict";
import "./styles.css";
import { fetchCity, getWeatherInfo } from "./modules/fetch";

window.onload = fetchCity();

document.querySelector(".search button").addEventListener("click", () => {
  let val = document.querySelector(".search input").value;
});
