document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded!");
    document.querySelectorAll("section").forEach(sec => {
        sec.addEventListener("mouseenter", () => {
            sec.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        });
        sec.addEventListener("mouseleave", () => {
            sec.style.backgroundColor = "transparent";
        });
    });
});
