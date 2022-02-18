// Membuat animasi untuk warna background dan link navbar
const navbar = document.getElementById("navbar");
const navLink = document.querySelectorAll(".nav-link");
const myLogo = document.getElementById("my-logo");
const myLogoYellow = myLogo.children[0];

window.onscroll = function() {
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
        navbar.classList.add("bg-light");
        navLink.forEach(a => {
            a.style.color = "#212121";
        });
        myLogo.style.color = "#3750d2";
        myLogoYellow.style.color = "#f7a703";
    } else {
        navbar.classList.remove("bg-light");
        navLink.forEach(a => {
            a.style.color = "#fafafa";
        });
        myLogo.style.color = "#fafafa";
        myLogoYellow.style.color = "#fafafa";
    }
};

// Membuat navbar responsive
const navSlide = () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navList = document.getElementById("nav-list");
    let navShown = false;

    hamburgerMenu.addEventListener("click", () => {
        if(navShown == false) {
            navShown = true;
            navList.style.transform = "translateX(0)";
            navList.style.opacity = 1;
        } else {
            navShown = false;
            navList.style.transform = "translateX(100%)";
            navList.style.opacity = 0;
        }
    });
}

navSlide();