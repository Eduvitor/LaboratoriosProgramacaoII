let lerNumero = parseInt(prompt("Digite numeros: "));
let count = 0;
let total = 0;

while (lerNumero > 0) {
    total += 1;
    if (lerNumero >= 10 && lerNumero <= 20) {
        count += 1;
    }
    lerNumero = parseInt(prompt("Digite numeros: "));
}

console.log("Percent of Numbers between 10 and 20:  " + count / total * 100 + "%");