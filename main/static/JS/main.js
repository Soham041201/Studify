const dropDown = document.querySelector(".dropdown");
const SideNav = document.querySelector(".side-nav");



dropDown.addEventListener("click", ()=>{
    SideNav.classList.toggle("transition1");
    SideNav.addEventListener("transitionend", () => {
                 SideNav.style.display="none";
        });
    if(SideNav.style.display="none"){
        SideNav.style.display="";
        // SideNav.style.transition="0.8s";
        // SideNav.style.opacity=1;
    }
});