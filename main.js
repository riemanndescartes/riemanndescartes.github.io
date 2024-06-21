function toggleDarkMode() {
    var pagecontainer = document.getElementById("page-container");
    pagecontainer.classList.toggle("page-container-dark");

    var header = document.querySelector("header");
    header.classList.toggle("header-dark");

    var alink = document.querySelectorAll("a");
    alink.classList.toggle("dark-mode-a");
}