function toggleNightMode() {
    var html = document.documentElement;
    var currentTheme = html.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Temayı uygula
    html.setAttribute('data-theme', newTheme);
    
    // Kaydet
    localStorage.setItem('theme', newTheme);
    
    // Toggle button'u güncelle
    var switcher = document.getElementById('mode-switcher');
    if (switcher) {
        if (newTheme === 'dark') {
            switcher.classList.add('active');
        } else {
            switcher.classList.remove('active');
        }
    }
}