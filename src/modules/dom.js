async function populateDom(data) {
  document.querySelector(".city").textContent = data.resolvedAddress;
  document.querySelector(".today-temp").textContent =
    `${data.currentConditions.temp}\u00B0C`;
  document
    .querySelector(".hero-logo")
    .setAttribute("src", await importAnimated(data.currentConditions.icon));
  document.querySelector(".hero-info").textContent =
    `${data.currentConditions.conditions}`;

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
  for (let i = 0; i < 7; i++) {
    if (i === 0) {
      dayCards[i].querySelector(".day").textContent = "Today";
    } else {
      dayCards[i].querySelector(".day").textContent = day(
        data.days[i].datetime
      );
    }
    dayCards[i]
      .querySelector(".status img")
      .setAttribute("src", await importStatic(data.days[i].icon));
    dayCards[i].querySelector(".status span").textContent =
      data.days[i].conditions;
    dayCards[i].querySelector(".day-temp span:first-child").textContent =
      `${Math.round(data.days[i].tempmax)}`;
    dayCards[i].querySelector(".day-temp span:last-child").textContent =
      `${Math.round(data.days[i].tempmin)}`;
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
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
  }
  return day;
}
export { populateDom };
