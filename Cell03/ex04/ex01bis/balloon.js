let size = 200;
let color = 0;

let colors = ["red", "green", "blue"];

$("#balloon").click(function () {
    size = size + 10;
    color = color + 1;

    if (color > 2) {
        color = 0;
    }

    if (size > 420) {
        size = 200;
    }

    $("#balloon").css({
    width: size + "px",
    height: size + "px",
    "background-color": colors[color]
});
});

$("#balloon").mouseleave(function () {
    if (size > 200) {
        size = size - 5;
    }

    color = color - 1;

    if (color < 0) {
        color = 2;
    }

    $("#balloon").css({
    width: size + "px",
    height: size + "px",
    "background-color": colors[color]
});
});