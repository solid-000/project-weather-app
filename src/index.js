"use strict";
import "./styles.css";
import { fetchCity, getWeatherInfo } from "./modules/fetch";
import cities from "cities.json";

const dataList = document.querySelector("#cities");

window.onload = fetchCity();
updateDatalist();

let search = document.querySelector(".search input");

document.querySelector(".search button").addEventListener("click", () => {
  getWeatherInfo(search.value);
  search.setAttribute("list", "");
});
search.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".search button").click();
    search.setAttribute("list", "");
  }
});
search.addEventListener("keydown", (event) => {
  if (event.target.value.length >= 3) {
    search.setAttribute("list", "cities");
  } else {
    search.setAttribute("list", "");
  }
});

async function updateDatalist() {
  cities.forEach((city) => {
    let option = document.createElement("option");
    option.setAttribute("value", city.name);
    option.textContent = `${city.name}`;
    dataList.append(option);
  });
}
