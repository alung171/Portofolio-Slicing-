// MENU HP

const tombolMenu = document.getElementById("menuButton");
const menu = document.getElementById("menu");

tombolMenu.addEventListener("click", function () {

    menu.classList.toggle("buka");

});


// MENU NAVBAR

const linkMenu = document.querySelectorAll(".menu a");

linkMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("buka");

    });

});


// GANTI TEMA

const tema = document.getElementById("tema");

tema.addEventListener("click", function() {

    document.body.classList.toggle("terang");

    if (document.body.classList.contains("terang")) {

        tema.textContent = "☾";

    } else {

        tema.textContent = "☀";

    }

});


// TOMBOL KE ATAS

const atas = document.getElementById("atas");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        atas.classList.add("muncul");

    } else {

        atas.classList.remove("muncul");

    }

});


atas.addEventListener("click", function() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});