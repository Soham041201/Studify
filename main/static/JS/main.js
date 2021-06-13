const dropDown = document.querySelector(".dropdown");
const SideNav = document.querySelector(".side-nav");

dropDown.addEventListener("click", (event) => {
            if (SideNav.classList.contains("side-nav"))
            {
                SideNav.classList.toggle("transition1");

                SideNav.addEventListener("transitionend", () => {
                    SideNav.classList.remove("side-nav");
                    SideNav.classList.remove("transition1");
                    SideNav.style.display="none"
                });
                
               
            }
            else{
            if(!SideNav.classList.contains("side-nav"))
            {

                SideNav.classList.add("transition2");
                SideNav.addEventListener("transitionend", () => {
                    
                });
                SideNav.style.display="block";
                    SideNav.classList.add("side-nav");
                SideNav.classList.remove("transition2");

            }
        }
        });