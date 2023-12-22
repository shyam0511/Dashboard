document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Password validation logic
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain an uppercase letter, a number, and only @ as a special character.');
      return;
    }
  
    if (password === 'SmartServTest@123') {
      // Redirect to dashboard upon successful login
      window.location.href = 'dashboard.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
  });
  