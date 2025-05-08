function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// do not change the function above.

let input1 = prompt("Enter Start of the Range.");
let input2 = prompt("Enter End Of the Range.");

// Convert string inputs to actual types
let value1 = input1 === "NaN" ? NaN : isNaN(input1) ? input1 : Number(input1);
let value2 = input2 === "NaN" ? NaN : isNaN(input2) ? input2 : Number(input2);

alert(isSameType(value1, value2));
