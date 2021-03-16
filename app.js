const languageTogg = document.querySelector(".switch-lang");
const languagesList = document.querySelector(".hidden-lang")
const arrows = document.querySelectorAll(".arrows")

const allLanguages = document.querySelectorAll(".hidden-lang a")
const pickedLanguage = document.querySelector(".picked-language")


function activeLang() {
    languagesList.classList.toggle("active");
    arrows.forEach(arrow => arrow.classList.toggle("active"));
}
languageTogg.addEventListener("click", activeLang)

function changeLanguage() {

}
allLanguages.addEventListener("click", changeLanguage)