function toggleNav() {
  var overlay = document.getElementById("myNav");
  overlay.classList.toggle("open");
}
  
  // Get the navigation element
  var navbar = document.querySelector('.navbar');
  
  // Get the offset position of the navigation
  var sticky = navbar.offsetTop;
  
  // Function to add or remove the 'sticky' class
  function handleScroll() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  
  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Get the mobile navigation element
  var mobileNav = document.querySelector('.mobile-nav');
  
  // Get the offset position of the mobile navigation
  var mobileSticky = mobileNav.offsetTop;
  
  // Function to add or remove the 'sticky' class for mobile
  function handleMobileScroll() {
    if (window.pageYOffset > mobileSticky) {
      mobileNav.classList.add('sticky');
    } else {
      mobileNav.classList.remove('sticky');
    }
  }
  
  // Attach the scroll event listener for mobile
  window.addEventListener('scroll', handleMobileScroll);
  
  // Get the tablet navigation element
  var tabletNav = document.querySelector('.tablet-nav');
  
  // Get the offset position of the tablet navigation
  var tabletSticky = tabletNav.offsetTop;
  
  // Function to add or remove the 'sticky' class for tablet
  function handleTabletScroll() {
    if (window.pageYOffset > tabletSticky) {
      tabletNav.classList.add('sticky');
    } else {
      tabletNav.classList.remove('sticky');
    }
  }
  
  // Attach the scroll event listener for tablet
  window.addEventListener('scroll', handleTabletScroll);
  
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }, 1000); // Adjust the delay time (in milliseconds) as needed
      }
    });
  });
  