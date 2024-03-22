// Declaring the circles
const redCircle = document.querySelector(".red");
const blueCircle = document.querySelector(".blue");
const circles = document.querySelectorAll(".circle");

function getRandomPosition(element) {
    // Just getting the values for easier use
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    return {
      left: Math.floor(Math.random() * windowWidth) - elementWidth / 2 ,
      top: Math.floor(Math.random() * windowHeight) - elementHeight / 2,
    };
  }


function animateCircle(element) {
    const newPosition = getRandomPosition(element);
    const animationDuration = 20000; // milliseconds

    element.style.transition = `all ${animationDuration}ms ease-in-out`;
    element.style.left = `${newPosition.left}px`;
    element.style.top = `${newPosition.top}px`;
    element.style.height = `${Math.floor(Math.random() * 300) + 500}px`;

    // Infinte loop
    setTimeout(() => animateCircle(element), animationDuration);
  }

circles.forEach(animateCircle);

// Event listener for left click
document.addEventListener("click", (event) => {
    const animationDuration = 2000; // milliseconds

if (event.button === 0 && event.ctrlKey) { // Check for right click + ctrlKey
    redCircle.style.transition = `all ${animationDuration}ms ease-in-out`;
    redCircle.style.left = `${event.clientX - redCircle.offsetWidth / 2}px`;
    redCircle.style.top = `${event.clientY - redCircle.offsetHeight / 2}px`;
  }
  else if (event.button === 0) { // Check for left click (0 button)
    blueCircle.style.transition = `all ${animationDuration}ms ease-in-out`; 
    blueCircle.style.left = `${event.clientX - blueCircle.offsetWidth / 2}px`;
    blueCircle.style.top = `${event.clientY  - blueCircle.offsetHeight / 2}px`;
  }
})

