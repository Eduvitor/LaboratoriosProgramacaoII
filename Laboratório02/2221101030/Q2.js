const CalculaAcresOrDecres = (opcao, preco) => {
    if (opcao == 1) {
        return preco * 0.95;
    }else if (opcao == 2) {
        return preco * 1.10;
    }
}
try {
    let lerOpcao = parseInt(prompt("1 - Á vista, 2 - Á prazo"));
    let lerValor = parseInt(prompt("Digite o valor:"));
    console.log("Value of product: R$ " + CalculaAcresOrDecres(lerOpcao, lerValor).toFixed(2));
} catch (error) {
    console.error("prompt not defined, are you running in a nodejs console?");
    //detecta se houve uma execao da ferramenta prompt, se houver executa o exemplo do código

    //Funcaoo de exemplo 

    console.log("Value of product: R$" + CalculaAcresOrDecres(1, 120));
}
