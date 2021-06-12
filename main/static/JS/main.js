const dropDown = document.querySelector(".dropdown");
const SideNav = document.querySelector(".side-nav");

dropDown.addEventListener("click", (event) => {
            if (SideNav.classList.contains("side-nav"))
            {
                SideNav.classList.toggle("transition1");

                SideNav.addEventListener("transitionend", () => {
                    SideNav.style.display="none";
                });
                
               
            }
            if(SideNav.style.display=="none")
            {
                    SideNav.style.display="block";
            }
        });