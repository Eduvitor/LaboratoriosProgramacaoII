///calcular fatorial
// fat de 0 == 1 
const fatorial = (fatorando) => {
    if(fatorando <= 1){return 1;}
    return fatorando * fatorial(fatorando-1);
}

function mostraResultado() {
    let numFat = parseInt(prompt("Digite o numero a ser fatorado!"));
    console.log('O fatorial de ' + numFat + ' é ' + fatorial(numFat));
    return;
}

try {
    mostraResultado();
} catch (error) {
    console.error("prompt not defined, are you running in a nodejs console?");
    //erro de prompt roda o codigo de exemplo 
    //fatorial de 5 saida deve ser de 120;
    console.log('O fatorial de ' + 5 + ' é ' + fatorial(5));
}
