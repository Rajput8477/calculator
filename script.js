//create a variable
var screen = document.querySelector('#screen');
var btn = document.querySelector('.btns');
for (item of btn) {
    Array.from(button).forEach((button) =>
        item.addEventListner('click', (e) => {
            if (e.target.innerHTML == '=') {
                String = eval(String);
                document.querySelector(input).value = String;
            }
        }
        )
    )
}
//create multiple function to all performance
function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function log() {
    screen.value = Math.log(screen.value);
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = 2.71828182846;
}
function sub() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function fact() {
    var i, n, f;
    f = 1;
    n = screen.value;
    for (i = 1; i <= n; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}