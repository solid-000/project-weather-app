import image from "../asset/img/animated/clear-day.svg";
async function populateDom(data) {
  document.querySelector(".city").textContent = data.address;
  document.querySelector(".today-temp").textContent =
    `${data.currentConditions.temp}\u00B0`;
  document
    .querySelector(".hero-logo")
    .setAttribute("src", await importAnimated(data.currentConditions.icon));

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

async function importStatic(file) {
  let icon = await import(`../asset/img/static/${file}.svg`);
  return icon.default;
}
async function importAnimated(file) {
  let icon = await import(`../asset/img/animated/${file}.svg`);
  return icon.default;
}

export { populateDom };
