let showAnswer = true;

function openMenu() {
    document.body.classList += "menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function showTestimonial(show, hide) {
    document.getElementById(`testimonial_${hide}`).style.display = "none";
    document.getElementById(`testimonial_${show}`).style.display = "block";
}

function toggleAnswer(number) {
    if (showAnswer) {
        document.getElementById(`answer_${number}`).style.display = "block";
        document.getElementById(`btn_${number}`).style.transform = "rotate(180deg)";
    }
    else {
        document.getElementById(`answer_${number}`).style.display = "none";
        document.getElementById(`btn_${number}`).style.transform = "rotate(0deg)";
    }
    showAnswer = !showAnswer
}