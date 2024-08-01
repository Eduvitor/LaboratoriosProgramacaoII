
const sumForNumber = (number1) => {
    //recursion primary case 
    if (number1 == 0){return 0;}
    return number1 + sumForNumber(number1-1);
}
try {
    let number = parseInt(prompt("Write a number!"));
    console.log("Soma até o numero " + number + " é de " + sumForNumber(number));
} catch (error) {
    //roda o exemplo de teste, a saida devera ser de 21, 1+2+3+4+5+6
    console.log("Soma até 6 de exemplo caso use o node para executar é " + sumForNumber(6));
}
