// Mengambil referensi elemen-elemen yang akan diubah
var imageElement = document.querySelector('.portfolio-item img');
var titleElement = document.querySelector('.portfolio-item h2');
var paragraphElement = document.querySelector('.portfolio-item p');

// Menyembunyikan elemen-elemen edit secara default
var editForm = document.querySelector('.edit-form');
editForm.style.display = 'none';

// Menampilkan elemen-elemen edit jika admin sudah login
function showEditElements() {
  editForm.style.display = 'block';
}

// Mengubah konten ketika tombol simpan ditekan
function saveChanges() {
  var newImage = document.getElementById('new-image').value;
  var newTitle = document.getElementById('new-title').value;
  var newParagraph = document.getElementById('new-paragraph').value;

  // Mengubah konten secara sementara
  imageElement.src = newImage;
  titleElement.innerText = newTitle;
  paragraphElement.innerText = newParagraph;

  // Menyembunyikan elemen-elemen edit setelah perubahan disimpan
  editForm.style.display = 'none';
}

// Mengatur visibilitas elemen-elemen edit berdasarkan status login admin
function checkAdminLogin() {
  // Lakukan pengecekan status login admin di sini
  var isAdminLoggedIn = true; // Ganti dengan logika autentikasi sesuai kebutuhan

  if (isAdminLoggedIn) {
    showEditElements();
  }
}

// Panggil fungsi checkAdminLogin saat halaman dimuat
window.addEventListener('DOMContentLoaded', checkAdminLogin);

// ...

// Authentication
function authenticateAdmin(username, password) {
    return username === "admin" && password === "admin111";
  }
  
  // Menampilkan elemen-elemen edit jika admin sudah login
  function showEditElements() {
    editForm.style.display = 'block';
  }
  
  // Mengubah konten ketika tombol simpan ditekan
  function saveChanges() {
    var newImage = document.getElementById('new-image').value;
    var newTitle = document.getElementById('new-title').value;
    var newParagraph = document.getElementById('new-paragraph').value;
  
    // Mengubah konten secara sementara
    imageElement.src = newImage;
    titleElement.innerText = newTitle;
    paragraphElement.innerText = newParagraph;
  
    // Menyembunyikan elemen-elemen edit setelah perubahan disimpan
    editForm.style.display = 'none';
  }

// Authenticates the admin
function authenticateAdmin(username, password) {
    return username === "admin" && password === "admin123";
  }
  
  // Shows the edit form
  function showEditForm() {
    var editForm = document.querySelector('.edit-form');
    editForm.style.display = 'block';
  }
  


// Checks if the admin is logged in
function isAdminLoggedIn() {
    // Implement your authentication logic here
    // Return true if the admin is logged in, false otherwise
    var username = prompt("Enter username:");
    var password = prompt("Enter password:");
    return authenticateAdmin(username, password);
  }
  
  // Shows the edit forms for admin
  function showEditForms() {
    var editForms = document.querySelectorAll('.edit-form');
    editForms.forEach(function (form) {
      form.style.display = 'block';
    });
  }
  
  // Hides the edit forms
  function hideEditForms() {
    var editForms = document.querySelectorAll('.edit-form');
    editForms.forEach(function (form) {
      form.style.display = 'none';
    });
  }
  
  // ...
  
  // Call showEditForms or hideEditForms based on admin login status
  window.addEventListener('DOMContentLoaded', function () {
    if (isAdminLoggedIn()) {
      showEditForms();
    } else {
      hideEditForms();
    }
  });
  