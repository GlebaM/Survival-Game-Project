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

    // Desktop menu
    function activeLang() {
        $(".hidden-lang").toggleClass("active");
        $(".arrows").toggleClass("active");
        $(".nav-main").removeClass("show");
    }
    $(".switch-lang-wrap").on("click", activeLang)

    $(".hidden-lang>li").on('click', function() {
        $(".picked-language").text($(this).text());
        $(".hidden-lang").removeClass("active");
    });

    // Mobile menu
    $('.menu-icon').on('click', function() {
        $(".hidden-lang").removeClass("active");
        $(".nav-main").toggleClass("show");
        if ($(".fa-angle-down.active")) {
            $(".fa-angle-down.active").removeClass("active")
            $(".fa-angle-up").addClass("active")
        } else if ($(".fa-angle-up.arrows.active")) {
            $(".fa-angle-down.active").addClass("active")
            $(".fa-angle-up").removeClass("active")
        }
    })

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
        $('.img-gal').removeClass('show');
        $('.round').removeClass('active');

        if (j < images.length) {
            images[j].classList.add("show");
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

    for (let i = 0; i <= $h2features.length; i++) {
        $($h2features[i]).on("click", function() {
            $featureList.addClass("hidden");
            $h2features.removeClass("white");
            $featureList[i].classList.remove("hidden");
            $h2features[i].classList.add("white")
        })
    }
    // Section sixth - Not finished

    // Wiem że miało być onsubmit ale znalazłem coś takiego
    let form = document.querySelector("#my-form");

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.querySelector("#submit-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            $(".news-alert").addClass("active");
            setTimeout(function() {
                $(".news-alert").removeClass("active");
            }, 4000)
            status.textContent = "Thanks for your submission!";
            form.reset()
        }).catch(error => {
            status.textContent = "Oops! There was a problem submitting your form. Address is wrong or. Please fill this box!!!"
        });
    }
    form.addEventListener("submit", handleSubmit)

    $(".news-input").on("click", function() {
        $(".news-alert").removeClass("active");
    })

});