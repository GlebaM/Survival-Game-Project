// FIRST SECTION
const languageTogg = document.querySelector(".switch-lang-wrap");
const languagesList = document.querySelector(".hidden-lang")
const arrows = document.querySelectorAll(".arrows")

const allLanguages = [...document.querySelectorAll(".hidden-lang a ")];
const pickedLanguage = document.querySelector(".picked-language");




function activeLang() {
    languagesList.classList.toggle("active");
    arrows.forEach(arrow => arrow.classList.toggle("active"));
}
languageTogg.addEventListener("click", activeLang)

for (const any of allLanguages) {
    any.addEventListener('click', () => {
        // console.log(anyOne.textContent);
        pickedLanguage.textContent = any.textContent;
    });
}


const imgSwitch = document.querySelector(".img-switch");
const images = document.querySelectorAll('.img-gal');
const circles = document.querySelectorAll('.round');

// SECOND SECTION
let j = 1;

function changeImage() {

    for (const img of images) {
        img.classList.add("hide");

    }
    for (const circle of circles) {
        circle.classList.remove("active");

    }
    if (j < images.length) {
        images[j].classList.remove("hide");
        circles[j].classList.add("active");
    }
    j++;
    if (j >= 4) {
        j = 0
    }
}

imgSwitch.addEventListener('click', changeImage);

// THIRD SECTIO