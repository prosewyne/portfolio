const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const sections = document.querySelectorAll('header, section, #profile-img, #theme-toggle');

// Load saved theme from localStorage
if(localStorage.getItem('theme') === 'theme2'){
    body.classList.remove('theme1');
    body.classList.add('theme2');
}

// Function to fade elements
function fadeElements(opacity) {
    sections.forEach(el => {
        el.style.opacity = opacity;
    });
}

// Theme toggle with cinematic fade
toggleButton.addEventListener('click', () => {
    fadeElements(0); // fade out all elements
    
    setTimeout(() => {
        if(body.classList.contains('theme1')){
            body.classList.remove('theme1');
            body.classList.add('theme2');
            localStorage.setItem('theme', 'theme2');
        } else {
            body.classList.remove('theme2');
            body.classList.add('theme1');
            localStorage.setItem('theme', 'theme1');
        }

        fadeElements(1); // fade in elements

        // Button pop animation
        toggleButton.style.transform = 'scale(1.2)';
        setTimeout(() => toggleButton.style.transform = 'scale(1)', 200);
    }, 350);
});
