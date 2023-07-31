const images = document.querySelectorAll('.image-gallery img');
let currentImageIndex = 0;

function showImage(imgElement) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    currentImageIndex = Array.from(images).indexOf(imgElement);

    modal.style.display = 'flex';
    modalImage.src = imgElement.src;
}

function closeImage() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

function changeImage(offset) {
    const modalImage = document.getElementById('modal-image');

    currentImageIndex += offset;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    modalImage.src = images[currentImageIndex].src;
}
