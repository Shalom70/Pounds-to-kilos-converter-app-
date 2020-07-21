const poundInput = document.getElementById("pound-input");
const kiloInput = document.getElementById("kilo-input");
// const convertButton = document.getElementById("convert-button");

// convertButton.addEventListener("click", () => {
//   const pounds = poundInput.value;
//   const kilos = pounds * 0.4539237;
//   kiloInput.value = isNaN(kilos) ? 0 : kilos;
// });

poundInput.addEventListener("input", () => {
  const pounds = poundInput.value;
  const kilos = pounds * 0.45359237;
  kiloInput.value = isNaN(kilos) ? 0 : kilos;
});

kiloInput.addEventListener("input", () => {
  const kilos = kiloInput.value;
  const pounds = kilos * 2.2046;
  poundInput.value = isNaN(pounds) ? 0 : pounds;
});
