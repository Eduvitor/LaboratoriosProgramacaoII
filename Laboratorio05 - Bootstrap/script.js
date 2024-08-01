let button_dark = $("#dark");
let button_light = $("#light");

console.log(button_dark);
button_light.on('click', function(){
    $('html').attr('data-bs-theme', 'light');
});

button_dark.on('click', function(){
    $('html').attr('data-bs-theme', 'dark');
});