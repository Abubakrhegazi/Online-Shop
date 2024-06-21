// darkMode.js

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const toggleDarkMode = () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateStyles(isDarkMode);
        console.log(`Dark mode ${isDarkMode ? 'enabled' : 'disabled'}`);
    };

    const toggle = document.getElementById('toggle-dark');
    if (toggle) {
        toggle.addEventListener('click', toggleDarkMode);
    }

    // Check local storage for dark mode preference on page load
    window.onload = function() {
        const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
        if (darkModeEnabled) {
            body.classList.add('dark-mode');
            updateStyles(true);
            console.log('Dark mode enabled from localStorage');
        }
    };

    // Function to update styles based on dark mode state
    function updateStyles(isDarkMode) {
        const elementsToUpdate = document.querySelectorAll('.dark-mode-update');
        elementsToUpdate.forEach(element => {
            if (isDarkMode) {
                element.classList.add('dark-mode');
            } else {
                element.classList.remove('dark-mode');
            }
        });
    }
});
