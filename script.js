    // Teks loading yang ingin ditampilkan
    const loadingText = "Loading...";

    // Elemen tempat teks ditampilkan
    const loadingTextElement = document.getElementById("loading-text");

    // Fungsi untuk animasi mengetik
    let index = 0;
    function typeWriter() {
        if (index < loadingText.length) {
            loadingTextElement.innerHTML += loadingText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Atur kecepatan ketikan
        } else {
            // Setelah mengetik selesai, tampilkan konten
            setTimeout(hideLoader, 1000); // Delay sedikit sebelum menyembunyikan
        }
    }

    // Fungsi untuk menyembunyikan loader dan menampilkan konten
    function hideLoader() {
        document.getElementById("loading").style.display = 'none';
        document.getElementById("content").style.display = 'block'; // Tampilkan konten
    }

    // Memulai animasi saat halaman dimuat
    window.addEventListener('load', typeWriter);


const darkModeIcon = document.getElementById('darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


    // Initialize maps for each school
    function initMap(id, coords) {
        var map = L.map(id, { dragging: false, scrollWheelZoom: false }).setView(coords, 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        L.marker(coords).addTo(map);
    }

    // Initialize each map with specific coordinates
    initMap('map-sdn4', [-7.374007,108.550156]);
    initMap('map-smpn2', [-7.370150,108.543107]);
    initMap('map-smkn1', [-7.370422,108.526562]);

    // Redirect to Google Maps when a button is clicked
    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function() {
            const coords = this.getAttribute('data-coords');
            window.open(`https://www.google.com/maps?q=${coords}`, '_blank');
        });
    });

// JavaScript untuk animasi progress
    document.querySelectorAll('.skill-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const progressBar = icon.nextElementSibling.nextElementSibling.querySelector('.progress');
            const levelIndicator = icon.parentElement.querySelector('.level-indicator');
            const level = parseInt(progressBar.getAttribute('data-level')); // Ambil level sebagai angka
            let currentLevel = 0; // Mulai dari 0

            // Reset progress dan level indicator
            progressBar.style.width = '0';
            levelIndicator.style.opacity = '1'; // Tampilkan level indicator
            levelIndicator.textContent = '0%'; // Reset level indicator

            // Fungsi untuk animasi level
            const interval = setInterval(() => {
                if (currentLevel < level) {
                    currentLevel += 1; // Naikkan level
                    progressBar.style.width = currentLevel + '%'; // Perbarui lebar progress
                    levelIndicator.textContent = currentLevel + '%'; // Perbarui level indicator
                } else {
                    clearInterval(interval); // Hentikan interval saat mencapai level akhir
                }
            }, 50); // Interval lebih lambat untuk animasi lebih halus

            // Setelah animasi selesai, sembunyikan level indicator
            const totalAnimationTime = level * 50 + 1000; // Total waktu animasi
            setTimeout(() => {
                levelIndicator.style.opacity = '0'; // Sembunyikan level indicator
            }, totalAnimationTime); // Sembunyikan setelah animasi selesai
        });
    });
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mendapatkan nilai input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Lakukan sesuatu dengan data (misal, kirim ke server)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Tampilkan pesan sukses
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Reset form setelah 2 detik
    setTimeout(() => {
        successMessage.style.display = 'none';
        document.getElementById('contact-form').reset();
    }, 2000);
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block"; // Show the button
            } else {
                scrollToTopBtn.style.display = "none"; // Hide the button
            }
        };

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll effect
            });
        }
        
function createRain() {
    const rainContainer = document.querySelector('.rain');

    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');

        // Posisi acak di bagian atas footer
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // Durasi acak
        drop.style.animationDelay = `${Math.random() * 2}s`; // Penundaan acak untuk variasi

        rainContainer.appendChild(drop);
    }
}

function createLightning() {
    const lightningContainer = document.querySelector('.lightning');

    // Buat petir berbentuk S
    const lightningStrike = document.createElement('div');
    lightningStrike.classList.add('lightning-strike');
    lightningStrike.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak
    lightningStrike.style.animation = 'flash 0.2s ease-in-out forwards';

    lightningContainer.appendChild(lightningStrike);

    // Tampilkan petir
    lightningStrike.style.display = 'block';

    // Hapus petir setelah 200ms
    setTimeout(() => {
        lightningContainer.removeChild(lightningStrike);
    }, 200); // Tampilkan selama 200ms
}

// Jalankan fungsi untuk membuat hujan dan petir saat halaman dimuat
window.onload = () => {
    createRain();
    setInterval(createLightning, 1000); // Buat petir setiap 1000ms untuk frekuensi yang lebih tinggi
};

window.onscroll = function() {
            const scrollButton = document.querySelector(".scroll-to-top");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollButton.classList.add("show");
            } else {
                scrollButton.classList.remove("show");
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah reload halaman

            // Sembunyikan form
            document.getElementById("contact-form").style.display = "none";

            // Tampilkan pesan sukses dengan animasi fade-in
            const successMessage = document.getElementById("success-message");
            successMessage.classList.add("show");

            // Tampilkan pesan ucapan terima kasih setelah sedikit jeda
            setTimeout(() => {
                const thankYouMessage = document.getElementById("thank-you");
                thankYouMessage.classList.add("show");
            }, 800);
        });