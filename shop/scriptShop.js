// Store the current position of each slider
const sliderPositions = {};

function moveSlider(section, direction) {
    const slider = document.getElementById(`slider-${section}`);
    const images = slider.querySelectorAll('img');
    const imageWidth = images[0].clientWidth + 10; // Image width + gap
    const visibleImages = 4; // Number of images visible at a time
    const sliderWidth = imageWidth * visibleImages;

    // Initialize the current position if not already done
    if (!sliderPositions[section]) {
        sliderPositions[section] = 0;
    }

    // Calculate new position
    const maxPosition = -(imageWidth * images.length - sliderWidth);
    sliderPositions[section] += direction * sliderWidth;

    // Constrain within limits
    if (sliderPositions[section] > 0) {
        sliderPositions[section] = 0; // Prevent scrolling too far left
    } else if (sliderPositions[section] < maxPosition) {
        sliderPositions[section] = maxPosition; // Prevent scrolling too far right
    }

    // Apply transform to move the slider
    slider.style.transform = `translateX(${sliderPositions[section]}px)`;
}
