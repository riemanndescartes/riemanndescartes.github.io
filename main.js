/*function home() {
    var mode = true; 
}*/ /*A LATER PROBLEM*/

function toggleDarkMode() {
    toggleDarkModeGeneral();
    toggleDarkModeHome();
}

function toggleDarkModeContent() {
    toggleDarkModeGeneral();
    toggleDarkModeCalculus();
}
function toggleDarkModeGeneral() {
    var pagecontainer = document.getElementById("page-container");
    pagecontainer.classList.toggle("page-container-dark");

    /*var header = document.querySelector("header");
    header.classList.toggle("header-dark");*/

    var alink = document.querySelectorAll("a");
    alink.forEach(function(link) {
        link.classList.toggle("dark-mode-a");
    });

    document.documentElement.classList.toggle('dark-scroll');

    var footer = document.getElementById("footer");
    footer.classList.toggle("footer-dark");
}

function toggleDarkModeHome() {
    var intromsg = document.getElementById("intromsg");
    intromsg.classList.toggle("intromsg-dark");
    
    var intromsgpartb = document.getElementById("intromsgpartb");
    intromsgpartb.classList.toggle("intromsgpartb-dark");

    var plan = document.getElementById("plan");
    plan.classList.toggle("plan-dark");
}

function toggleDarkModeCalculus() {
    var content = document.getElementById("content");
    content.classList.toggle("content-dark");

    var sidebar = document.getElementById("side-bar");
    sidebar.classList.toggle("side-bar-dark");
}