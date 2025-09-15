const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numberInput = document.getElementById("number");

const convertToRoman = (num) => {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      result += romanMap[i].symbol;
      num -= romanMap[i].value;
    }
  }

  return result;
};

const validateAndConvert = (num) => {
  if (isNaN(num)) {
    return "Please enter a valid number";
  } else if (num < 1) {
    return "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else {
    return convertToRoman(num);
  }
};

// convertButton.addEventListener("click", () => {
//   const num = parseInt(numberInput.value);
//   output.textContent = validateAndConvert(num);
// });

numberInput.addEventListener("input", () => {
  const num = parseInt(numberInput.value);
  output.textContent = numberInput.value === "" ? "" : validateAndConvert(num);
});
