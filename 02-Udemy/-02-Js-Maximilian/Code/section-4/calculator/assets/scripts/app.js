const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input feild
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = ` ${resultBeforeCalc} ${operator} ${calcNumber} `;
  outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function claculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }
  // if (
  //   calculationType === "ADD" ||
  //   calculationType === "SUBTRACT" ||
  //   calculationType === "MULTIPLY" ||
  //   calculationType === "DIVIDE"
  // ){

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIBLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  claculateResult("ADD");
}
function subtract() {
  claculateResult("SUBTRACT");
}
function multiply() {
  claculateResult("MULTIBLY");
}
function divide() {
  claculateResult("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
