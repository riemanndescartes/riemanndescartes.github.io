function toggleDarkMode() {
    var element = document.getElementById("page-container");
    element.classList.toggle("page-container-dark");

    var element = document.header;
    element.classList.toggle("header-dark");

    var element = document.a;
    element.classList.toggle("dark-mode-a");
}