document.addEventListener('scroll', function() {
    const sprite = document.querySelector('.sprite');
    const tails = document.querySelectorAll('.speech-bubble::after, .speech-bubble::before');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const totalHeight = document.body.offsetHeight;
  
    // Calculate the new position based on scroll
    const newPosition = (scrollY / (totalHeight - windowHeight)) * 100;
  
    // Update sprite position
    sprite.style.left = `${newPosition}%`;
  
    // Logic to hide sprite and tails at a certain position, e.g., 90%
    if (newPosition >= 90) {
      sprite.style.opacity = '0'; // Hide sprite
      // Attempting to directly modify pseudo-elements (::before, ::after) from JavaScript is not possible,
      // so you'll need to toggle a class on their parent or use another method.
    } else {
      sprite.style.opacity = '1'; // Show sprite
    }
  
    // Dynamically adjust sprite's animation
    if (Math.abs(lastScrollY - scrollY) > 5) {
      sprite.style.backgroundImage = "url('/path/to/walking-animation.gif')";
    } else {
      sprite.style.backgroundImage = "url('/path/to/idle-animation.gif')";
    }
  
    lastScrollY = scrollY; // Update last scroll position for the next event
  });
  
  let lastScrollY = 0; // Keep track of the last scroll position