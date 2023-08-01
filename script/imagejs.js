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


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-button');
    const items = document.querySelectorAll('.item');

    // Show div elements for the default active category ("All" in this case)
    const defaultCategory = 'all';
    items.forEach(item => {
        if (defaultCategory === 'all' || item.classList.contains(defaultCategory)) {
            item.classList.add('active');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            items.forEach(item => {
                item.classList.remove('active');
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('active');
                }
            });
        });
    });
});