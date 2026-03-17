let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
startTimer();

// Next/previous controls
function plusSlides(n) {
    clearInterval(slideTimer);
    showSlides(slideIndex += n);
    startTimer();
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic Timer
function startTimer() {
    slideTimer = setInterval(function () {
        plusSlides(1);
    }, 5000);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Slide logic
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Reset - Hide all slides.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Reset Dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show active slide and dot.
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}