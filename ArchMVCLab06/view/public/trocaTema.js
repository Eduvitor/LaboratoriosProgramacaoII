const endPointAPI = "http://localhost:3301";
let button_dark = $("#dark");
let button_light = $("#light");

console.log(button_dark);
button_light.on('click', function(){
    $('html').attr('data-bs-theme', 'light');
});

button_dark.on('click', function(){
    $('html').attr('data-bs-theme', 'dark');
});

fetch(endPointAPI  + '/cursos')
    .then(response => response.json())
    .then(data => {
        const cursos = data;
        console.log(cursos);
        $('#ccuffs')
            .append(`<h1>${cursos[0].nome}</h1>`)
            .append(`<p><strong>Turno: </strong>${cursos[0].turno}</p>`)
            .append(`<p><strong>Cordenadores: </strong>${cursos[1].cordenadores}</p>`)
            .append(`<p><strong>Descrição: </strong>${cursos[1].descricao}</p>`);
    })
    .catch(error => {
        console.error("ocorreu um problema: ", error);
    });


fetch(endPointAPI  + '/cursos')
    .then(response => response.json())
    .then(data => {
        const cursos = data;
        console.log(cursos[2]);
        $('#hisuffs')
            .append(`<h1>${cursos[2].nome}</h1>`)
            .append(`<p><strong>Turno: </strong>${cursos[2].turno}</p>`)
            .append(`<p><strong>Cordenadores: </strong>${cursos[2].cordenadores}</p>`)
            .append(`<p><strong>Descrição: </strong>${cursos[2].descricao}</p>`);
    })
    .catch(error => {
        console.error("ocorreu um problema: ", error);
    });

fetch(endPointAPI  + '/cursos')
    .then(response => response.json())
    .then(data => {
        const cursos = data;
        console.log(cursos[2]);
        $('#meduffs')
            .append(`<h1>${cursos[3].nome}</h1>`)
            .append(`<p><strong>Turno: </strong>${cursos[3].turno}</p>`)
            .append(`<p><strong>Cordenadores: </strong>${cursos[3].cordenadores}</p>`)
            .append(`<p><strong>Descrição: </strong>${cursos[3].descricao}</p>`);
    })
    .catch(error => {
        console.error("ocorreu um problema: ", error);
    });