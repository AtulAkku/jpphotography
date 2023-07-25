const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// // Get the navbar element
// const navbar = document.getElementById('navbar');

// // Define the scroll event handler
// function changeNavbarColorOnScroll() {
//   // Replace '100' with the number of pixels equivalent to 100vh
//   const triggerHeight = 100 * window.innerHeight / 100;
  
//   if (window.scrollY > triggerHeight) {
//     navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolled
//   } else {
//     navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
//   }
// }

// // Attach the event listener to the 'scroll' event
// window.addEventListener('scroll', changeNavbarColorOnScroll);


const navbar = document.getElementById('navbar');

// Define the scroll event handler
function changeNavbarColorOnScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolled
  } else {
    navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
  }
}

// Attach the event listener to the 'scroll' event
window.addEventListener('scroll', changeNavbarColorOnScroll);