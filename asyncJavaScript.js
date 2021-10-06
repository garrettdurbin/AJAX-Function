const capitalsList = document.getElementById("capitals-list");

// Set Initial State of Async JavaScript Button
let showCapitals = true;

// Async JavaScript Button
var asyncButton = document.getElementById("async-javascript-button");
asyncButton.addEventListener(
  "click",
  function toggleCapitals() {
    if (!showCapitals) {
      capitalsList.innerHTML = "";
      showCapitals = true;
    } else {
      addCapitals();
      showCapitals = false;
    }
  },
  false
);

async function addCapitals() {
  const res = await fetch("data/capitals.json");

  const data = await res.json();

  console.log(data);
  for (i = 0; i < data.length; i++) {
    capitalsList.innerHTML += `<div class="capitals">${
      data[i].capital +
      ", " +
      data[i].name +
      " Latitude: " +
      data[i].lat +
      ". Longitude: " +
      data[i].long +
      "."
    }</div>`;
  }
}

// addCapitals();
