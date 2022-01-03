["pl", "sb"].map((cl) => {
  document.querySelectorAll(`.${cl}`).forEach((item) =>
    item.addEventListener("click", () => {
      console.log(item);
      document.querySelectorAll(`.active-${cl}`).forEach((e) => {
        e.classList.remove(`active-${cl}`);
      });
      item.classList.add(`active-${cl}`);

      const time = item.id.slice(3);
      if (window.localStorage) {
        localStorage.setItem(`${cl}Time`, `${time}:00`);
        localStorage.setItem(`${cl}Item`, `#${item.id}`);
      }
    })
  );
});
