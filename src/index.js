"use strict";
import "./styles.css";

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
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json
`
  );
  let data = await response.json();
}
