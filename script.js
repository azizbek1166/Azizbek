document.getElementById("signupForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  document.getElementById("signupMessage").innerText = "Registration successful!";
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");
  if (email === storedEmail && password === storedPassword) {
    window.location.href = "course.html";
  } else {
    document.getElementById("loginMessage").innerText = "Invalid email or password";
  }
});
