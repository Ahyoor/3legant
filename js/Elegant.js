const sliderElem = document.querySelector(".slider");

const cardWidth = 310;

let currentPosition = 0;

function slideLeft() {
    currentPosition += cardWidth;  // currentPosition = currentPosition + cardwidth
    if (currentPosition > 0) {
        currentPosition = 0;
    }
    updateSliderPosition();
}
function slideRight() {
    const maxPosition = sliderElem.scrollWidth - sliderElem.clientWidth;
    currentPosition -= cardWidth;  // currentPosition = currentPosition + cardwidth
    if (currentPosition < -maxPosition) {
        currentPosition = -maxPosition;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    sliderElem.style.transform = `translate(${currentPosition}px)`;
}