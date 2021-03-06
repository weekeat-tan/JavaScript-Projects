const yearSelectEl = document.querySelector("#year-select");
appendYearOptions();

const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

function appendYearOptions() {
  const currentDate = new Date();

  for (let i = 1; i <= 100; i++) {
    const year = currentDate.getFullYear() + i;
    const newYearOption = document.createElement("option");
    newYearOption.innerText = `${year}`;
    newYearOption.value = `${year}`;
    yearSelectEl.append(newYearOption);
  }
}

function countdown() {
  const newYears = `1 Jan ${yearSelectEl.value}`;
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const secondsLeft = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(secondsLeft / 3600 / 24);
  const hours = Math.floor((secondsLeft / 3600) % 24);
  const mins = Math.floor(secondsLeft / 60) % 60;
  const seconds = Math.floor(secondsLeft) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
yearSelectEl.addEventListener("change", countdown);
