
  const blogContainer = document.querySelector('.blog-container');
  const scrollLeftButton = document.getElementById('scroll-left');
  const scrollRightButton = document.getElementById('scroll-right');
  const scrollAmount = 300; // Adjust scroll distance per button click

  // Scroll Left Functionality
  scrollLeftButton.addEventListener('click', () => {
    blogContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  // Scroll Right Functionality
  scrollRightButton.addEventListener('click', () => {
    blogContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

