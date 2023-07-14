// Cek login admin
function checkAdminLogin() {
    // Contoh sederhana: username = admin, password = admin123
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (username === "admin" && password === "admin123") {
        // Tampilkan halaman admin
        document.getElementsByClassName("admin-login")[0].style.display = "none";
        document.getElementsByClassName("admin-panel")[0].style.display = "block";
    } else {
        alert("Login failed. Please try again.");
    }
}

