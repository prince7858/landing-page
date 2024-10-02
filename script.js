document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    // Prevent the form from submitting
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple validation checks
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email.");
    } else {
      alert("Form submitted successfully!");
      // Here you can proceed to submit the form data to the server
      this.submit();  // Uncomment this line to actually submit the form
    }
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  