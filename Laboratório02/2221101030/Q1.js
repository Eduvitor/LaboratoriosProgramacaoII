function CalcNumOfHoursXMoney(horas, salario) {
    const Porcentagem = 0.05;
    if (horas >= 200) {
        return (horas * salario) + ((horas * salario) * Porcentagem);
    }
    else {
        return horas * salario;
    }
}
if (typeof window !== 'undefined') {
    let horas = parseInt(prompt("Number of hours worked"));
    let valueHour = parseInt(prompt("Value of hour"));
    console.log("Salario: R$ " + CalcNumOfHoursXMoney(horas, valueHour).toFixed(2));
} else {
    //exemplo de funcionamento com os valores 120 horas e 100 o valor da hora:
    //a saida devera ser de 12000.00
    console.log("Salario: R$ " + CalcNumOfHoursXMoney(120, 100).toFixed(2));

    //exemplo agora com os valores 210 e 50 para satisfazer os 5% adicionais
    //A saida devera ser de 11025.00
    console.log("Salario: R$ " + CalcNumOfHoursXMoney(210, 50).toFixed(2));
}
