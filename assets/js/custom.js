if (typeof setTheme === 'undefined') {
    function setTheme(theme) {
        theme = theme || localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
}

function toggleNightMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateToggleButton(newTheme);
}

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

document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateToggleButton(currentTheme);
});

// WATERMARK
let watermarkVisible = false;

function createWatermark() {
    removeAllWatermarks();
    
    const positions = [
        { top: '50%', left: '25%' }
    ];
    
    positions.forEach((pos, index) => {
        const textElement = document.createElement('div');
        textElement.className = 'watermark-element';
        textElement.textContent = 'CG';
        textElement.style.top = pos.top;
        textElement.style.left = pos.left;
        textElement.id = `watermark-text-${index}`;
        
        document.body.appendChild(textElement);
    });
    
    watermarkVisible = true;
}

function removeAllWatermarks() {
    const watermarks = document.querySelectorAll('.watermark-element');
    watermarks.forEach(element => element.remove());
    watermarkVisible = false;
}

window.addEventListener('beforeprint', function() {
    createWatermark();
});

window.addEventListener('afterprint', function() {
    removeAllWatermarks();
});