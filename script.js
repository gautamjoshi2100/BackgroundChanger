let hex_codes = ["#FF0000","#FFA07A","#8B0000","#FF4500","#FF8C00","#FFD700","#BDB76B","#FFDAB9","#00FF00","#006400","#98FB98","#4169E1","#000080","#483D8B","#FF00FF","#9932CC"];

let high = hex_codes.length;

let but = document.querySelector(".button");

but.addEventListener('click', function() {
    let id = Math.floor(Math.random() * high);
    document.body.style.backgroundColor = hex_codes[id];
    document.body.style.transitionDelay = "0.5s";
})