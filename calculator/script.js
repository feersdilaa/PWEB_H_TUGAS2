let total = 0;

function hasilTambah() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("hasil").innerHTML =
    parseInt(firstNumber) + parseInt(secondNumber);
}
function hasilKurang() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("hasil").innerHTML =
    parseInt(firstNumber) - parseInt(secondNumber);
}
function hasilKali() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("hasil").innerHTML =
    parseInt(firstNumber) * parseInt(secondNumber);
}
function hasilBagi() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("hasil").innerHTML =
    parseInt(firstNumber) / parseInt(secondNumber);
}
