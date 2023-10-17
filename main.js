var Canvas = document.getElementById("A");
var ctx = Canvas.getContext("2d");
var car = "a.png";
var car_X = 10;
var car_Y = 10;
var car_Width = 200;
var car_height = 275;
var background = "";
var car1 = "";

function B() {
    background = new Image();
    background.onload = upload;
    background.src = "download.jpeg";

    car1 = new Image();
    car1.onload = upload1;
    car1.src = car;
}

function upload() {
    ctx.drawImage(background, 0, 0, 800, 600);
}

function upload1() {
    ctx.drawImage(car1, car_X, car_Y, car_Width, car_height);
}
window.addEventListener("keydown", C);

function C(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (car_Y >= 5) {
        car_Y = car_Y - 5;
        upload();
        upload1();
    }
}

function down() {
    if (car_Y <= 595) {
        car_Y = car_Y + 5;
        upload();
        upload1();
    }
}

function left() {
    if (car_X >= 5) {
        car_X = car_X - 5;
        upload();
        upload1();
    }
}

function right() {
    if (car_X <= 795) {
        car_X = car_X + 5;
        upload();
        upload1();
    }
}