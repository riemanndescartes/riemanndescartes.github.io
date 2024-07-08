/*function home() {
    var mode = true; 
}*/ /*A LATER PROBLEM*/

function toggleDarkMode() {
    var pagecontainer = document.getElementById("page-container");
    pagecontainer.classList.toggle("page-container-dark");

    /*var header = document.querySelector("header");
    header.classList.toggle("header-dark");*/

    var alink = document.querySelectorAll("a");
    alink.forEach(function(link) {
        link.classList.toggle("dark-mode-a");
    });

    document.documentElement.classList.toggle('dark-scroll');

    var intromsg = document.getElementById("intromsg");
    intromsg.classList.toggle("intromsg-dark");

    var footer = document.getElementById("footer");
    footer.classList.toggle("intromsg-dark");
}