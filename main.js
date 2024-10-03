/*function home() {
    var mode = true; 
}*/ /*A LATER PROBLEM*/

function toggleDarkMode() {
    // Call general toggling
    toggleClass(["page-container", "footer"], "dark");

    // Call home page specific toggling
    toggleClass(["intromsg", "intromsgpartb", "plan"], "dark");

    // Update dark/light mode icons
    updateDarkModeIcon();
}

function toggleDarkModeContent() {
    // Call general toggling
    toggleClass(["page-container", "footer"], "dark");

    // Call content-specific toggling
    toggleClass(["content", "side-bar"], "dark");

    // Update dark/light mode icons
    updateDarkModeIcon();
}

function toggleClass(elements, suffix) {
    // Generic function to toggle class based on element ids and suffix
    elements.forEach(function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.toggle(`${elementId}-${suffix}`);
        }
    });

    // Toggle links' class
    var alinks = document.querySelectorAll("a");
    alinks.forEach(function (link) {
        link.classList.toggle("dark-mode-a");
    });

    // Toggle scrollbar style
    document.documentElement.classList.toggle('dark-scroll');
}

function updateDarkModeIcon() {
    // Example of updating the icon in the <i> tag for dark mode/light mode
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle.classList.contains("fa-moon")) {
        // Switch to sun icon for light mode
        darkModeToggle.classList.remove("fa-moon");
        darkModeToggle.classList.add("fa-sun");
        darkModeToggle.style.color = "white"; // Set icon to white when it's the sun
    } else {
        // Switch to moon icon for dark mode
        darkModeToggle.classList.remove("fa-sun");
        darkModeToggle.classList.add("fa-moon");
        darkModeToggle.style.color = ""; // Reset color to default (or you can specify another color for the moon)
    }
}

