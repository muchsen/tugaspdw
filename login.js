// login.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#login-form");

    loginForm.addEventListener("submit", handleLogin);
});

function handleLogin(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert("Login successful.");
        window.location.href = "index.html";
    } else {
        alert("Email or password is incorrect. Please try again.");
    }
}
