document.addEventListener('DOMContentLoaded', () => {
    // Get the last modified date of the page
    document.getElementById("last-modified").innerHTML = new Date(document.lastModified).toLocaleDateString();

    // Get the current year
    document.getElementById("current-year").innerHTML = new Date().getFullYear();
});