// register.js
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("#register-form");

    registerForm.addEventListener("submit", handleRegistration);
});

function handleRegistration(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const user = {
        email: email,
        password: password
    };

    // Simulate storing the user in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";

    alert("Registration successful. Please login with the created account.");
    window.location.href = "login.html";
}
