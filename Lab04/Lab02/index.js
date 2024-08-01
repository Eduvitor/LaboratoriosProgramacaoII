const db = require('./database');
console.log(db.cursos[0]);




// para inserir na lista, use push:
// db.cursos.push({ ... })


// para remover da lista, use splice passando o índice do elemento e a quantidade de
// elementos a serem removidos. Exemnplo para remover o primeiro elemento:
// db.cursos.splice(0, 1) remove um elemento a partir do índice 0
