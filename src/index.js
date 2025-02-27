"use strict";
import "./styles.css";
import { fetchCity, getWeatherInfo } from "./modules/fetch";

window.onload = fetchCity();

let search = document.querySelector(".search input");

document.querySelector(".search button").addEventListener("click", () => {
  getWeatherInfo(search.value);
});
search.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".search button").click();
  }
});
