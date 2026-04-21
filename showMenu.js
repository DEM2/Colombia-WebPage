function showMenu() {
    var menu = document.getElementsByClassName("menuMobile");
    var boton = document.getElementById("bMenu");

    if (menu[0].classList.contains("active")) {
        boton.innerText = "≡";
    } else {
        boton.innerText = "X";
    }
    menu[0].classList.toggle("active")
}