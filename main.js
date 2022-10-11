const handleChange = (event) => {
  document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + event.target.dataset.suffix);
};

const $$ = document.querySelectorAll.bind(document);

const controls = $$("input");

controls.forEach((control) => {
  control.addEventListener("change", handleChange);
  control.addEventListener("mousemove", handleChange);
});