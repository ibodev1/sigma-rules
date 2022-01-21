function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

document.addEventListener("DOMContentLoaded", function() {
    random_bg_color();
    setInterval(() => {
        random_bg_color();
    }, 5000);
});