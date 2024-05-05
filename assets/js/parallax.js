// Get the parallax image element
const headerElement = document.querySelector("#header");


function parallaxEffect() {
    // Get the scroll position
    const scrollTop = window.pageYOffset;
  
    // Calculate the parallax scroll speed (adjust the value 0.5 to change the speed)
    const parallaxSpeed = scrollTop * -0.04;
  
    // Apply the background-position transformation to the parallax container
    headerElement.style.backgroundPosition = `center ${parallaxSpeed}px`;
  }
  
  // Add the event listener for the scroll event
  window.addEventListener('scroll', parallaxEffect);