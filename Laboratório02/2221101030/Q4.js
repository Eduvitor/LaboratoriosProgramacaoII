
const DoMultiplication = (N1, N2) => {
    if (N2 == 0){return 0;}
    return N1 + DoMultiplication(N1, N2-1);
}

if (typeof window !== 'undefined'){
    let num1 = parseInt(prompt("First Number:"));
    let num2 = parseInt(prompt("Second Number:"));
    console.log('Result: ' + DoMultiplication(num1, num2));
}
else {
    //roda o exemplo de teste com os valores 7 e 8 saida deve ser de 56
   console.log('Result: ' + DoMultiplication(7, 8));
}