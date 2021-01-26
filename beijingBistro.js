/*$(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 100) {
        alert("hola");
    }
});

$(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth <= 400) {
        $("html").css("background-size", "auto 250px");
    }
    else {
        $("html").css("background-size", "100% auto");
    }
});*/



function toggleNavigationBar(button) {

    if (button.classList.contains("navToggleOn")) {
        document.getElementById("sideNav").style.width = "0px";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
    } else {
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("sideNav").style.width = "250px";
    }

    button.classList.toggle("navToggleOn")

}