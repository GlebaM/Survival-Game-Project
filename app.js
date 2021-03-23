$(document).ready(function() {

    // // FIRST SECTION - JS
    // const languageTogg = document.querySelector(".switch-lang-wrap");
    // const languagesList = document.querySelector(".hidden-lang")
    // const arrows = document.querySelectorAll(".arrows")
    // const allLanguages = [...document.querySelectorAll(".hidden-lang a ")];
    // const pickedLanguage = document.querySelector(".picked-language");

    // function activeLang() {
    //     languagesList.classList.toggle("active");
    //     arrows.forEach(arrow => arrow.classList.toggle("active"));
    // }
    // languageTogg.addEventListener("click", activeLang)

    // for (const any of allLanguages) {
    //     any.addEventListener('click', () => {
    //         pickedLanguage.textContent = any.textContent;
    //         languagesList.classList.toggle("active");
    //     });
    // }
    // FIRST SECTION - jQuerry
    const languagesList = $(".hidden-lang")

    function activeLang() {
        languagesList.toggleClass("active");
        $(".arrows").toggleClass("active");
    }
    $(".switch-lang-wrap").on("click", activeLang)

    $(".hidden-lang>a").on('click', function() {
        $(".picked-language").html($(this).html());
        languagesList.toggleClass("active");
    });

    // SECOND SECTION
    // JS used
    // const imgSwitch = document.querySelector(".img-switch");
    // const images = document.querySelector('.img-gal');
    // const circles = document.querySelector('.round');

    // function changeImage() {

    //     for (const img of images) {
    //         img.classList.add("hide");
    //     }
    //     for (const circle of circles) {
    //         circle.classList.remove("active");
    //     }
    //     if (j < images.length) {
    //         images[j].classList.remove("hide");
    //         circles[j].classList.add("active");
    //     }
    //     j++;
    //     if (j >= 4) {
    //         j = 0
    //     }
    // }
    // imgSwitch.addEventListener('click', changeImage);

    // jQuerry used
    const images = $('.img-gal');
    const circles = $('.round');
    let j = 1;

    function changeImage() {
        $('.img-gal').addClass('hide');
        $('.round').removeClass('active');

        if (j < images.length) {
            images[j].classList.remove("hide");
            circles[j].classList.add("active");
            j++
            if (j >= 4) {
                j = 0
            }
        }
    }
    $(".img-switch").on('click', changeImage);

    // THIRD SECTION


    const $h2features = $(".h2-features");
    const $featureList = $(".feature-list");
    const $circleList = $("footer div h2");


    for (let i = 0; i <= $h2features.length; i++) {

        $($h2features[i]).on("click", function() {
            $featureList.addClass("hidden");
            $circleList.removeClass("white");
            $featureList[i].classList.remove("hidden");
            $circleList[i].classList.add("white")
        })
    }

    // Section sixth - Not finished

    const newsButton = document.querySelector(".submitBtn");
    const newsInput = document.querySelector(".news-input");
    // const newsEmail = document.querySelector("[data-mail]");
    const newsAlert = document.querySelector(".news-alert");
    // const newsSpan = document.querySelector(".news-alert>p>span")

    function emailAlert() {
        //  newsEmail.textContent = newsInput.textContent;
        if (!newsInput.nodeValue) {
            newsAlert.classList.add('active');
            setTimeout(() => {
                newsAlert.classList.remove('active')

            }, 4000);

        } //  else if (newsInput.includes("@")) {
        //     newsAlert.classList.add('active');
        //     newsSpan.innerHTML = `Please include "@" in your e-mail address`;
    }

    newsButton.addEventListener("click", emailAlert);

    // $(document).ready(function($) {
    //     $('*:not(.submitBtn)').on("click", function() {
    //         $('.news-alert').removeClass('active');
    //     });
    // });

});