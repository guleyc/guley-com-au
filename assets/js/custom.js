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

// WATERMARK
// Bu JavaScript kodunu sitenizin alt kısmına ekleyin
let watermarkVisible = false;

function createWatermark() {
    removeAllWatermarks();
    
    const positions = [
        { top: '50%', left: '50%' }
    ];
    
    positions.forEach((pos, index) => {
        const textElement = document.createElement('div');
        textElement.className = 'watermark-element';
        textElement.textContent = 'Cagatay Guley';
        textElement.style.top = pos.top;
        textElement.style.left = pos.left;
        textElement.id = `watermark-text-${index}`;
        
        document.body.appendChild(textElement);
        
        // const imgElement = document.createElement('img');
        // imgElement.className = 'watermark-image';
        // imgElement.src = 'https://guley.com.tr/assets/images/watermark.png';
        // imgElement.style.top = pos.top;
        // imgElement.style.left = pos.left;
        // imgElement.style.width = '100px';
        // imgElement.style.height = '100px';
        // imgElement.style.transform = 'rotate(-45deg)';
        // imgElement.id = `watermark-img-${index}`;
        
        // imgElement.onerror = function() {
        //     this.style.display = 'none';
        // };
        
        // document.body.appendChild(imgElement);
    });
    
    watermarkVisible = true;
}

function removeAllWatermarks() {
    const watermarks = document.querySelectorAll('.watermark-element, .watermark-image');
    watermarks.forEach(element => element.remove());
    watermarkVisible = false;
}

window.addEventListener('beforeprint', function() {
    createWatermark();
});

window.addEventListener('afterprint', function() {
    removeAllWatermarks();
});