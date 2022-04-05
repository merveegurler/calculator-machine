const endsWithOperator = /[x+‑/]$/;

function evaal (expression) {
  while (endsWithOperator.test(expression)) {
    expression = expression.slice(0, -1);
  }
  expression = expression
        .replace(/x/g, '*')
        .replace(/‑/g, '-')
        .replace('-*', '*')
        .replace('/*', '*')
        .replace('+*', '*')
        .replace('--', '+')
        .replace('*/', '/')
        .replace('-/', '/')
        .replace('+/', '/')
        .replace('/+', '+')
        .replace('*+', '+')
        .replace('-+', '+')
  let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
  const ans = answer.toString();
  document.getElementById("display").value = expression + "=" + ans;
  document.getElementById("output").value = ans;
}

document.getElementById("equals").addEventListener("click", evaal(expression));

function removeZero (value ,id) {
  if(value[0] == '0' && value[1] != '.'){
    let arr = [...value];
    arr.shift();
    value = arr.toString().replaceAll(",", "");
    document.getElementById("display").value = value;
  }
}

document.getElementById("zero").addEventListener("click", removeZero(value, id));
document.getElementById("one").addEventListener("click", removeZero(value, id));
document.getElementById("two").addEventListener("click", removeZero(value, id));
document.getElementById("three").addEventListener("click", removeZero(value, id));
document.getElementById("four").addEventListener("click", removeZero(value, id));
document.getElementById("five").addEventListener("click", removeZero(value, id));
document.getElementById("six").addEventListener("click", removeZero(value, id));
document.getElementById("seven").addEventListener("click", removeZero(value, id));
document.getElementById("eight").addEventListener("click", removeZero(value, id));
document.getElementById("nine").addEventListener("click", removeZero(value, id));
document.getElementById("divide").addEventListener("click", removeZero(value, id));
document.getElementById("add").addEventListener("click", removeZero(value, id));
document.getElementById("subtract").addEventListener("click", removeZero(value, id));
document.getElementById("multiply").addEventListener("click", removeZero(value, id));

function notAllowMultipleZeros(value) {
  if(value[value.length-1] == '0' && value[value.length-2] == "0") {
    let arr = [...value];
    arr.pop();
    value = arr.toString().replaceAll(",", "");
    document.gelElementById("display").value = value;
  }
}

function multipleDecimal (value) {
  let a = [...value];
  a.pop();
  let b = a.toString().replaceAll(",", "");
  if(b.includes('.')) {
    let arr = [...value];
    arr.pop();
    value = arr.toString().replaceAll(",", "");
    document.getElementById("display").value = value;
  }
}

document.getElementById("decimal").addEventListener("click", multipleDecimal(value));