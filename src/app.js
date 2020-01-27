window.$ = window.jQuery = require('jquery');

function colorMe(i) {
    let square = $(".container div:eq(" + i + ")");
    setTimeout(() => {
        i % 2 ? square.addClass("white") : square.addClass("black");
    }, i * 1000);
}

for(let i = 0; i < 9; i++) {
    colorMe(i);
}
