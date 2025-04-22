document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("show-more-btn");
    const hiddenContent = document.getElementById("hidden-content");

    showMoreBtn.addEventListener("click", function () {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
            showMoreBtn.textContent = "Show Less";
        } else {
            hiddenContent.style.display = "none";
            showMoreBtn.textContent = "Show More";
        }
    });
});
