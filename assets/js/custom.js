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
        { top: '20%', left: '20%' },
        { top: '20%', left: '60%' },
        { top: '40%', left: '40%' },
        { top: '60%', left: '20%' },
        { top: '60%', left: '60%' },
        { top: '80%', left: '40%' }
    ];
    
    positions.forEach((pos, index) => {
        // Metin watermark
        const textElement = document.createElement('div');
        textElement.className = 'watermark-element';
        textElement.textContent = 'Cagatay Guley'; // Buraya kendi metninizi yazın
        textElement.style.top = pos.top;
        textElement.style.left = pos.left;
        textElement.id = `watermark-text-${index}`;
        
        document.body.appendChild(textElement);
        
        // Görüntü watermark (isteğe bağlı)
        const imgElement = document.createElement('img');
        imgElement.className = 'watermark-image';
        imgElement.src = './assets/images/watermark.png'; // Kendi görüntü yolunuz
        imgElement.style.top = pos.top;
        imgElement.style.left = pos.left;
        imgElement.style.width = '100px';
        imgElement.style.height = '100px';
        imgElement.style.transform = 'rotate(-45deg)';
        imgElement.id = `watermark-img-${index}`;
        
        imgElement.onerror = function() {
            this.style.display = 'none';
        };
        
        document.body.appendChild(imgElement);
    });
    
    watermarkVisible = true;
}

function removeAllWatermarks() {
    const watermarks = document.querySelectorAll('.watermark-element, .watermark-image');
    watermarks.forEach(element => element.remove());
    watermarkVisible = false;
}

// Otomatik watermark - tüm print işlemleri için
window.addEventListener('beforeprint', function() {
    createWatermark();
});

window.addEventListener('afterprint', function() {
    // İsteğe bağlı: print sonrası watermark'ı kaldır
    removeAllWatermarks();
});