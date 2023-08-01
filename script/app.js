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



// for scroll    was suppose to blur the nav while move
// const navbar = document.getElementById('navbar');

// // Define the scroll event handler
// function changeNavbarColorOnScroll() {
//   if (window.scrollY > 0) {
//     navbar.classList.add('scrolled'); // Add the 'scrolled' class when scrolled
//   } else {
//     navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
//   }
// }




// Attach the event listener to the 'scroll' event
window.addEventListener('scroll', changeNavbarColorOnScroll);



// JavaScript function to toggle the sidebar when the option button is clicked
function toggleMenu() {
  var menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    // Add a click event listener to the document to close the sidebar when clicking outside
    document.addEventListener("click", closeMenuOutside);
  } else {
    // Remove the click event listener when the option button is clicked again to close the sidebar
    document.removeEventListener("click", closeMenuOutside);
  }
}

// JavaScript function to close the sidebar when clicking outside
function closeMenuOutside(event) {
  var menu = document.querySelector(".nav-menu");
  var optionButton = document.querySelector(".option-button");

  // Check if the clicked target is outside the sidebar and the option button
  if (!menu.contains(event.target) && !optionButton.contains(event.target)) {
    menu.classList.remove("show");
  }
}
