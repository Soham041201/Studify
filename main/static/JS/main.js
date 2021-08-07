const dropDown = document.querySelector(".dropdown");
const SideNav = document.querySelector(".side-nav");
const logos = document.querySelectorAll(".tooltip");
const logo=document.querySelector(".logo");

SideNav.style.maxWidth = "200px";
dropDown.addEventListener("click", () => {

    if (SideNav.style.maxWidth == "0px") {
        for (item of logos) {
            item.classList.remove("remove");
        }
        SideNav.style.maxWidth = "200px";
        SideNav.style.transition = "1s";
        
        SideNav.addEventListener("transitionend", () => {
            
            for (item of logos) {
            item.classList.remove("visible");

                item.classList.remove("remove");
            }
        });
        
        

    } else {
        SideNav.style.maxWidth = "0px";
        SideNav.style.transition = "2s";
        ;
        for(item of logos)
        {
            item.classList.add("visible");
        }
        SideNav.addEventListener("transitionend", () => {
            for (item of logos) {
                item.classList.add("visible");
                item.classList.add("remove");
            }
        });
    }
});
window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        SideNav.classList.add("sidenav-active");
        logo.classList.add("logo-active");
    },400)
})
