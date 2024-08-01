const calculaDuracaoEvento = (inicio, fim) => {
    if (fim > inicio) {
        return fim - inicio;
    }else {
        return 24 - inicio + fim;
    }
}
try {
    let init = parseInt(prompt("Hora de inicio: "));
    let fim = parseInt(prompt("Hora de termino: "));

    console.log("Duracao do evento: " + calculaDuracaoEvento(init, fim) + " Horas");
} catch (error) {
    //roda o exemplo de teste com os valores inicio=21 e fim=6 a saida deve ser de 9 horas 
    console.log("Duracao do evento: " + calculaDuracaoEvento(21, 6) + " Horas");
}