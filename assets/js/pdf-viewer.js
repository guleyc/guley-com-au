// PDF.js Loader and Global Configuration
(function() {
    // PDF.js CDN URL
    const PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    
    // Load PDF.js if not already loaded
    if (typeof pdfjsLib === 'undefined') {
        const script = document.createElement('script');
        script.src = PDFJS_CDN;
        script.async = true;
        script.onload = function() {
            console.log('PDF.js loaded successfully');
            // Configure PDF.js worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = 
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        };
        script.onerror = function() {
            console.error('Failed to load PDF.js');
        };
        document.head.appendChild(script);
    }
})();

// PDF Viewer Utilities
window.PDFViewerUtils = {
    // Generate unique viewer ID
    generateId: function() {
        return 'pdf-viewer-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    },
    
    // Download PDF function
    downloadPDF: function(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'document.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },
    
    // Print PDF function
    printPDF: function(url) {
        const printWindow = window.open(url, '_blank');
        printWindow.onload = function() {
            printWindow.print();
        };
    }
};
