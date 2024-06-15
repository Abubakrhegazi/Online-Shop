const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

toggle.addEventListener('click', function(){
    toggleDarkMode();
});

window.onload = function() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
    }
};
