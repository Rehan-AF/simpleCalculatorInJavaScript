let mybtn = document.querySelector("#mybtn");

mybtn.addEventListener("click", function () {
  let number1 = document.querySelector("#input1").value;
  let number2 = document.querySelector("#input2").value;
  let operator = document.querySelector("#input3").value;
  number1 = Number(number1);
  number2 = Number(number2);

  // let sum = number1 * number2;
  let sum;
  let answer = document.querySelector("#answer");

  if (isNaN(number1) || isNaN(number2)) {
    answer.innerHTML = "Error Not A Number";
  } else if (number1 == 0 && number2 == 0) {
    answer.innerHTML = "Didnt Enter any number";
  } else if (operator == "*") {
    sum = number1 * number2;
    answer.innerHTML = sum;
  } else if (operator == "/") {
    sum = number1 / number2;
    answer.innerHTML = sum;
  } else if (operator == "+") {
    sum = number1 + number2;
    answer.innerHTML = sum;
  } else if (operator == "-") {
    sum = number1 - number2;
    answer.innerHTML = sum;
  } else {
    answer.innerHTML = "SyntexError";
  }
});
