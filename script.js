// Scroll to section when clicking product name
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Simple search functionality
function searchProduct() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('main section');

    sections.forEach(section => {
        const title = section.querySelector('h2').innerText.toLowerCase();
        if(title.includes(input)) {
            section.scrollIntoView({ behavior: 'smooth' });
            section.style.backgroundColor = 'rgba(255, 182, 193, 0.9)';
            setTimeout(() => { 
                section.style.backgroundColor = 'rgba(255, 240, 245, 0.5)'; 
            }, 2000);
        }
    });
}

// Lightbox functionality
document.querySelectorAll('main section img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.getElementById('lightboxOverlay');
        const lightboxImg = document.getElementById('lightboxImg');
        lightboxImg.src = img.src;
        overlay.style.display = 'flex';
    });
});

document.getElementById('lightboxOverlay').addEventListener('click', () => {
    document.getElementById('lightboxOverlay').style.display = 'none';
});