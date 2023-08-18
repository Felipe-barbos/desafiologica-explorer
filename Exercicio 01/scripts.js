

let num1, num2;


num1 = Number(prompt("Digite o primeiro número: "));
num2 = Number(prompt("Digite o segundo número: "));

alert(`A soma dos dois números são: ${num1 + num2}`);
alert(`A subtração dos dois números são: ${num1 - num2}`);
alert(`A multiplicação dos dois números são: ${num1 * num2}`);
alert(`A divisão dos dois números são: ${num1 / num2}`);
alert(`O resto da divisão dos dois números são: ${num1 % num2}`);


if ((num1 + num2) % 2 === 0) {
  alert(`A soma dos números é par: ${num1 + num2}`);
}
else {
  alert(`A soma dos números é impar: ${num1 + num2}`);
}

if (num1 === num2) {
  alert(`Os números inseridos são iguais`);
}
else {
  alert(`Os números inseridos são diferentes`)
}