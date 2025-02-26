import image from "../asset/img/animated/clear-day.svg";
async function populateDom(data) {
  document.querySelector(".city").textContent = data.resolvedAddress;
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
    timeCards[i]
      .querySelector(".time-img img")
      .setAttribute("src", await importStatic(data.days[0].hours[time].icon));
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

  const dayCards = document.querySelectorAll(".day-card");
  for (let i = 0; i < 6; i++) {
    dayCards[i].querySelector(".day").textContent = day(
      data.days[i + 1].datetime
    );
    dayCards[i]
      .querySelector(".status img")
      .setAttribute("src", await importStatic(data.days[i + 1].icon));
    dayCards[i].querySelector(".status span").textContent =
      data.days[i + 1].conditions;
  }
}

async function importStatic(file) {
  let icon = await import(`../asset/img/static/${file}.svg`);
  return icon.default;
}
async function importAnimated(file) {
  let icon = await import(`../asset/img/animated/${file}.svg`);
  return icon.default;
}
function day(date) {
  let dayInt = new Date(date).getDay();
  let day;
  switch (dayInt) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
}
export { populateDom };
