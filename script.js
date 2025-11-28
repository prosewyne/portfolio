const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const sections = document.querySelectorAll('header, section, #profile-img, #theme-toggle');
const sparkles = document.querySelectorAll('.sparkle');

// Load saved theme from localStorage
if(localStorage.getItem('theme') === 'theme2'){
    body.classList.remove('theme1');
    body.classList.add('theme2');
}

// Function to fade elements
function fadeElements(opacity, duration = 300) {
    sections.forEach(el => {
        el.style.transition = `opacity ${duration}ms ease`;
        el.style.opacity = opacity;
    });
}

// Toggle between themes with cinematic fade
toggleButton.addEventListener('click', () => {
    fadeElements(0, 300); // fade out content
    
    setTimeout(() => {
        // Swap themes
        if(body.classList.contains('theme1')){
            body.classList.remove('theme1');
            body.classList.add('theme2');
            localStorage.setItem('theme', 'theme2');
        } else {
            body.classList.remove('theme2');
            body.classList.add('theme1');
            localStorage.setItem('theme', 'theme1');
        }

        // Fade content back in
        fadeElements(1, 500);

        // Button pop animation
        toggleButton.style.transform = 'scale(1.2)';
        setTimeout(() => toggleButton.style.transform = 'scale(1)', 200);

    }, 350); // wait for fade-out
});
