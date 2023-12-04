const display = document.getElementById("display");

appendToDisplay = (input) => {
  display.value += input;
}


clearDisplay = () => {
  display.value = "";
}

//eval function takes expression and evaluates the value within the display
calculate = () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "ERROR";
  }

}
