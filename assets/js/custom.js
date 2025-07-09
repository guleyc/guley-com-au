// setTheme fonksiyonu yoksa ekleyin
if (typeof setTheme === 'undefined') {
    function setTheme(theme) {
        theme = theme || localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
}

// Tema değiştirme fonksiyonu
function toggleNightMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Temayı değiştir
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle button durumunu güncelle
    updateToggleButton(newTheme);
}

// Toggle button durumunu güncelle
function updateToggleButton(theme) {
    const switcher = document.getElementById('mode-switcher');
    if (switcher) {
        if (theme === 'dark') {
            switcher.classList.add('active');
        } else {
            switcher.classList.remove('active');
        }
    }
}

// Sayfa yüklendiğinde button durumunu ayarla
document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateToggleButton(currentTheme);
});