
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebarNav = document.querySelector(".sidebar-nav");
  
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      sidebarNav.classList.toggle("active");
    });
  });
  

document.getElementById("logout-btn").addEventListener("click", function() {
    // Hapus sesi pengguna atau lakukan tindakan logout lainnya
  
    // Alihkan ke halaman login atau halaman lainnya
    window.location.href = "login.html";
  });

  
 // register
 