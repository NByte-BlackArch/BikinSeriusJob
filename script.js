// Navigation
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Sticky navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu
      navLinks.classList.remove('show');
    }
  });
});

// Form submission
const form = document.getElementById('registration-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    let isValid = true;
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '#e2e8f0';
      }
    });
    
if (isValid) {
  // Ambil data dari form
  const name = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const position = document.getElementById('position').value;
  const experience = document.getElementById('experience').value;
  const portfolio = document.getElementById('portfolio').value;

  const message = `
*Pendaftaran Baru - BikinSerius.id* 
> Nama: ${name}
> Email: ${email}
> Telepon: ${phone}
> Posisi: ${position}
> Pengalaman: ${experience} tahun
> Portofolio: ${portfolio || 'Tidak ada'}
`;

  const whatsappNumber = '6287857424226';
  const encodedMsg = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

  window.open(whatsappURL, '_blank');

  // Reset form
  form.reset();

  const fileLabels = form.querySelectorAll('.file-upload label');
  fileLabels.forEach(label => {
    label.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Pilih File';
  });
} else {
      alert('Silakan lengkapi semua field yang wajib diisi.');
    }
  });
}

// File upload label
const fileInputs = document.querySelectorAll('input[type="file"]');
fileInputs.forEach(input => {
  const label = input.nextElementSibling;
  
  input.addEventListener('change', function() {
    if (this.files.length > 0) {
      label.innerHTML = `<i class="fas fa-file"></i> ${this.files[0].name}`;
    } else {
      label.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Pilih File';
    }
  });
});
