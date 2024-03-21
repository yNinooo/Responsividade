/********************************************************************************************/
//Função para realizar o toggle do menu hamburger
const headerLinks = document.querySelector(".header-style__links")
const headerUser = document.querySelector(".header-style__user")

document.getElementById("handleNavbar").addEventListener("click", () => {
    headerLinks.classList.toggle("open")
    headerUser.classList.remove("open")
});

document.getElementById("handleUserbar").addEventListener("click", () => {
    headerUser.classList.toggle("open")
    headerLinks.classList.remove("open")
});
/********************************************************************************************/

/********************************************************************************************/
//Função para setar o tema no local storage do navegador
function setTheme(theme) {
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
}


function getTheme() {
    if (localStorage.getItem("theme") === "theme-dark")
    {
        document
        .getElementById("toggle")
        .classList
        .replace("bi-brightness-high-fill", "bi-moon-fill")

        setTheme("theme-light")
    }
    else
    {
        document
        .getElementById("toggle")
        .classList
        .replace("bi-moon-fill", "bi-brightness-high-fill")

        setTheme("theme-dark")
    }
}
/********************************************************************************************/

/********************************************************************************************/
// IIFE ( Immediately Invoked Function Expression)
(function () {
    if (localStorage.getItem("theme") === "theme-dark")
    {
        setTheme("theme-dark")
    }
    else 
    {
        setTheme("theme-light")
    }

    headerUser.classList.remove("open")
    headerLinks.classList.remove("open")
})()
/********************************************************************************************/