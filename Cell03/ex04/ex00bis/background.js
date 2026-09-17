$("#change-button").click(function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    $("body").css(
        "background-color",
        "rgb(" + red + "," + green + "," + blue + ")"
    );
});