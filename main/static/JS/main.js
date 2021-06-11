const dropDown = document.querySelector(".dropdown");
const SideNav = document.querySelector(".side-nav");

dropDown.addEventListener("click", (event) => {
    if (SideNav.classList.contains("side-nav")) {
        SideNav.classList.toggle("side-nav-no");
    }
    // SideNav.addEventListener("transitionend", () => {
    //     SideNav.classList.toggle("transition");
    // });
});