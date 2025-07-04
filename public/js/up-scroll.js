// Sayfa kaydırıldığında butonu göster
window.onscroll = function() {
    var button = document.querySelector(".scroll-to-top");
    
    // Sayfa 300px aşağı kaydırıldığında butonu göster
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      button.style.display = "block";  // Görünür yap
    } else {
      button.style.display = "none";  // Gizle
    }
  };
  
  // Butona tıklanıldığında sayfayı yukarı kaydır
  document.querySelector(".scroll-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Yumuşak kaydırma efekti
    });
  });
  