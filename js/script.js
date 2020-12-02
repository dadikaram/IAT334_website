var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("top-nav").style.top = "0";
    } else {
        document.getElementById("top-nav").style.top = "-91px";
    }
    prevScrollpos = currentScrollPos;
}

var supportBtn = document.getElementById("support-us-btn");
var closeBtn = document.getElementById("close-support-btn");

supportBtn.addEventListener('click', showSupportSection);
closeBtn.addEventListener('click', hideSupportSection);

function showSupportSection() {
    var section = document.getElementById("support-section");
    // var sliderChoose = document.getElementById("outerChoose");
    var sliderFeature = document.getElementById("outerFeature");
    // var sliderDecision = document.getElementById("outerDecision");

    // sliderChoose.style.width = "46vw";
    sliderFeature.style.width = "46vw";
    // sliderDecision.style.width = "46vw";

    section.classList.remove("content-hidden");
}

function hideSupportSection() {
    var section = document.getElementById("support-section");
    // var sliderChoose = document.getElementById("outerChoose");
    var sliderFeature = document.getElementById("outerFeature");
    // var sliderDecision = document.getElementById("outerDecision");

    // sliderChoose.style.width = "70vw";
    sliderFeature.style.width = "70vw";
    // sliderDecision.style.width = "70vw";

    section.classList.add("content-hidden");
}