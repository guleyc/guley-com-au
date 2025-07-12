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
        { top: '25%', left: '10%' }
    ];
    
    positions.forEach((pos, index) => {
        
        const imgElement = document.createElement('img');
        imgElement.className = 'watermark-image';
        imgElement.src = 'https://guley.com.tr/assets/images/watermark.png';
        imgElement.style.top = pos.top;
        imgElement.style.left = pos.left;
        imgElement.style.width = '500px';
        imgElement.style.height = '500px';
        imgElement.style.transform = 'rotate(0)';
        imgElement.id = `watermark-img-${index}`;
        
        imgElement.onerror = function() {
            this.style.display = 'none';
        };
        
        document.body.appendChild(imgElement);
    });
    
    watermarkVisible = true;
}

function removeAllWatermarks() {
    const watermarks = document.querySelectorAll('.watermark-image');
    watermarks.forEach(element => element.remove());
    watermarkVisible = false;
}

window.addEventListener('beforeprint', function() {
    createWatermark();
});

window.addEventListener('afterprint', function() {
    removeAllWatermarks();
});