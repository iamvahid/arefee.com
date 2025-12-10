// Function to toggle between dark and light modes
function toggleTheme() {
    var body = document.body;
    // Toggle the 'dark_mode' and 'light_mode' classes on the body
    body.classList.toggle("dark_mode");
    body.classList.toggle("light_mode");

    // You can optionally store the user's theme preference in localStorage to persist the theme on page reload
    if (body.classList.contains("dark_mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Function to check the saved theme preference from localStorage on page load
function setInitialTheme() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark_mode");
        document.body.classList.remove("light_mode");
    } else {
        document.body.classList.add("light_mode");
        document.body.classList.remove("dark_mode");
    }
}

// Call the function to set the theme when the page is loaded
window.onload = setInitialTheme;
