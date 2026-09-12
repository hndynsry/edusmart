// ==========================================
// EduSmart - JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // Navigasi Halaman
    // ------------------------------------------

    const menuItems = document.querySelectorAll(".menu-item");
    const pages = document.querySelectorAll(".page");
    const pageLinks = document.querySelectorAll("[data-page-link]");

    function showPage(pageName) {
        pages.forEach(page => {
            page.classList.remove("active");
        });

        const targetPage = document.getElementById(`${pageName}Page`);

        if (targetPage) {
            targetPage.classList.add("active");
        }

        menuItems.forEach(item => {