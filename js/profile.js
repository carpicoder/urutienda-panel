const openProfile = document.querySelector("#open-profile");
const headerPanel = document.querySelector("#header-panel");
const closeProfile = document.querySelector("#close-profile");

openProfile.addEventListener("click", () => {
    headerPanel.classList.add("active");
});

closeProfile.addEventListener("click", () => {
    headerPanel.classList.remove("active");
})