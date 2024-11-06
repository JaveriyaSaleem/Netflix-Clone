let previousBtn = document.getElementById('previousBtn')
let nextBtn = document.getElementById('nextBtn')

// Select elements
const slider = document.getElementById('slider');
const nextButton = document.getElementById('nextBtn');

// Number of images displayed at a time
const imagesToShow = 4;
// Total images
const totalImages = 10;

// Current index of the first visible image
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    // Increment the index by the number of images to show
    currentIndex += imagesToShow;

    // Calculate the offset for the translation
    const offset = currentIndex * (100 / imagesToShow); // 100% / imagesToShow for each image width

    // Move the slider to the left by the calculated offset
    slider.style.transform = `translateX(-${offset}%)`;

    // Hide the Next button when reaching the end
    if (currentIndex >= totalImages - imagesToShow) {
        nextButton.style.display = 'none';
    }
});