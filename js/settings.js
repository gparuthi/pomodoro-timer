document.querySelectorAll(".pl").forEach((item) =>
  item.addEventListener("click", () => {
    items = document.querySelectorAll(".active-pl");
    for (const e of items) e.classList.remove("active-pl");
    item.classList.add("active-pl");
    const time = item.id.slice(3);

    if (window.localStorage) {
      localStorage.setItem("plTime", `${time}:00`);
      localStorage.setItem("plItem", `#${item.id}`);
    }
  })
);

document.querySelectorAll(".sl").forEach((item) =>
  item.addEventListener("click", () => {
    items = document.querySelectorAll(".active-sl");
    for (const e of items) e.classList.remove("active-sl");
    item.classList.add("active-sl");

    const time = item.id.slice(3);
    if (window.localStorage) {
      localStorage.setItem("sbTime", `${time}:00`);
      localStorage.setItem("sbItem", `#${item.id}`);
    }
  })
);
