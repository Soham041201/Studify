const dropDown = document.querySelector(".dropdown");
const SideNav = document.querySelector(".side-nav");
const logos = document.querySelectorAll(".tooltip");

SideNav.style.maxWidth = "200px";
dropDown.addEventListener("click", () => {

    if (SideNav.style.maxWidth == "0px") {
        for (item of logos) {
            item.classList.remove("remove");
        }
        SideNav.style.maxWidth = "200px";
        SideNav.style.transition = "2s";
        SideNav.addEventListener("transitionend", () => {
            for (item of logos) {
                item.classList.remove("remove");
            }
        });
        
        

    } else {
        SideNav.style.maxWidth = "0px";
        SideNav.style.transition = "2s";
        
        SideNav.addEventListener("transitionend", () => {
            for (item of logos) {
                item.classList.add("remove");
            }
        });
    }
});