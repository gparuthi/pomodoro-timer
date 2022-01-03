// main.js
let timerDisplay = document.querySelector("#display");
let pomodoroTime, timeObj;
let smallBreakTime, smallBreakObj;

if (window.localStorage && localStorage.plTime && localStorage.plItem) {
  pomodoroTime = localStorage.getItem("plTime");
  timeObj = localStorage.getItem("plItem");
}

if (window.localStorage && localStorage.sbTime && localStorage.sbItem) {
  [smallBreakTime, smallBreakObj] = [
    localStorage.getItem("sbTime"),
    localStorage.getItem("sbItem"),
  ];
} else {
  localStorage.setItem("sbTime", "5:00");
  localStorage.setItem("sbItem", "#sb-5");
}

if (timerDisplay) {
  if (pomodoroTime) timerDisplay.innerHTML = pomodoroTime;
  else {
    timerDisplay.innerHTML = "25:00";
    if (window.localStorage) localStorage.setItem("plTime", "25:00");
  }
}

if (timeObj) {
  const activeObj = document.querySelector(timeObj);
  if (activeObj) {
    const items = document.querySelectorAll(".active-pl");
    for (const e of items) e.classList.remove("active-pl");
    activeObj.classList.add("active-pl");
  }
}

if (smallBreakObj) {
  const activeObj = document.querySelector(smallBreakObj);
  if (activeObj) {
    const items = document.querySelectorAll(".active-sb");
    for (const e of items) e.classList.remove("active-sb");
    activeObj.classList.add("active-sb");
  }
}
function enableNoSleep() {
  if (NoSleep) {
    var noSleep = new NoSleep();
    window.removeEventListener("load", enableNoSleep, false);
    noSleep.enable();

    document.getElementById("about-btn").innerHTML = "Yes";
  }
}
// window.addEventListener("load", enableNoSleep, false);
document.addEventListener("click", enableNoSleep, false);
