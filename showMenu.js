function showMenu() {
    var menu = document.getElementsByClassName("menuMobile");
    var boton = document.getElementById("bMenu");
    menu[0].classList.toggle("active")
    boton.classList.toggle("bttActive")
}