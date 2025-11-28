const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const elements = document.querySelectorAll('header, #profile-img, button');
const icon = document.getElementById('toggle-icon');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    if(icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Toggle theme on click
toggleButton.addEventListener('click', () => {
    // Fade out elements
    elements.forEach(el => el.style.opacity = 0);

    setTimeout(() => {
        // Toggle dark class
        body.classList.toggle('dark');

        // Update icon if present
        if(icon) {
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
            icon.style.transform = 'rotate(180deg)';
            setTimeout(() => icon.style.transform = 'rotate(0deg)', 300);
        }

        // Fade elements back in
        elements.forEach(el => el.style.opacity = 1);

        // Button pop animation
        toggleButton.style.transform = 'scale(1.2)';
        setTimeout(() => toggleButton.style.transform = 'scale(1)', 150);

        // Save theme
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    }, 150);
});

//edited
