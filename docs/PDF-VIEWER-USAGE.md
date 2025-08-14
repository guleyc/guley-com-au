# PDF Viewer Usage Guide

This Jekyll blog uses Mozilla's official PDF.js viewer for displaying PDF documents. No custom CSS or JavaScript is maintained - we leverage the complete, professional PDF.js experience.

## Quick Start

1. **Add your PDF** to `/assets/pdfs/` directory
2. **Include in your post** using the include tag:

```liquid
{% include pdf-viewer.html file="your-document.pdf" %}
```

## Complete Syntax

```liquid
{% include pdf-viewer.html 
   file="document.pdf" 
   title="Custom Title" 
   caption="Description of the PDF" %}
```

### Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `file` | ✅ Yes | PDF filename (must be in `/assets/pdfs/`) |
| `title` | ❌ Optional | Custom title for accessibility and display |
| `caption` | ❌ Optional | Caption text shown below the viewer |

## Examples

### Basic Usage
```liquid
{% include pdf-viewer.html file="report.pdf" %}
```

### With Title and Caption
```liquid
{% include pdf-viewer.html 
   file="user-manual.pdf" 
   title="User Manual v2.0" 
   caption="Complete user guide with troubleshooting section" %}
```

### Academic Paper
```liquid
{% include pdf-viewer.html 
   file="research-paper.pdf" 
   title="Machine Learning Research" 
   caption="Published in Journal of AI Research, 2024" %}
```

## Features Included

Since we use Mozilla's official PDF.js viewer, all features are included out-of-the-box:

### Navigation
- Page thumbnails sidebar
- Previous/Next page buttons
- Jump to specific page
- Keyboard shortcuts (arrow keys, Page Up/Down)

### Viewing
- Zoom in/out with precise control
- Fit to page / Fit to width
- Single page, continuous scroll, and spread modes
- Rotate pages
- Full-screen presentation mode

### Tools
- Text search with highlighting
- Text selection and copying
- Download original PDF
- Print with browser integration
- View document outline (if available)
- View attachments (if any)

### Accessibility
- Screen reader compatible
- Keyboard navigation
- High contrast support
- Scalable interface

## File Structure

```
blog/
├── _includes/
│   ├── header.html              # Loads PDF.js CSS from CDN
│   └── pdf-viewer.html          # PDF viewer include template
├── assets/
│   └── pdfs/                    # Store your PDF files here
│       ├── document1.pdf
│       ├── document2.pdf
│       └── ...
└── _posts/
    └── 2024-08-14-pdf-test.md   # Example usage
```

## Technical Details

### Implementation
- **Viewer**: Mozilla PDF.js official viewer via iframe
- **CDN**: PDF.js CSS/JS loaded from cdnjs.cloudflare.com
- **No Custom Code**: Zero maintenance CSS/JS
- **Responsive**: Automatic mobile adaptation

### URL Structure
The viewer uses this pattern:
```
https://mozilla.github.io/pdf.js/web/viewer.html?file=YOUR_PDF_URL
```

### Browser Support
- ✅ Chrome/Chromium (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (modern versions)
- ✅ Edge (all versions)
- ✅ Mobile browsers (iOS Safari, Android Chrome)

## Troubleshooting

### PDF Not Loading
1. **Check file path**: Ensure PDF is in `/assets/pdfs/`
2. **Check filename**: No spaces or special characters
3. **Check file size**: Very large PDFs may load slowly
4. **Check CORS**: PDF must be served from same domain

### Display Issues
1. **Height**: Default is 800px, adjusts to content
2. **Width**: Always 100% of container
3. **Mobile**: Automatically responsive

### Common Errors
- `Error: PDF file not specified` → Add `file="filename.pdf"` parameter
- `Your browser does not support iframes` → Browser compatibility issue
- PDF not found → Check file exists in `/assets/pdfs/`

## Best Practices

1. **File Naming**: Use lowercase, no spaces, descriptive names
   - ✅ `user-manual-v2.pdf`
   - ❌ `User Manual V2.pdf`

2. **File Size**: Optimize PDFs for web
   - Compress images
   - Remove unnecessary metadata
   - Consider splitting very large documents

3. **Accessibility**: Always include title and caption
   ```liquid
   {% include pdf-viewer.html 
      file="document.pdf" 
      title="Descriptive Title" 
      caption="Brief description of content" %}
   ```

4. **Performance**: Don't embed multiple large PDFs on one page

## Migration from Custom Viewer

If upgrading from a custom PDF viewer:

1. **Old syntax** (deprecated):
   ```liquid
   {% include pdf-viewer.html src="/path/file.pdf" id="unique" %}
   ```

2. **New syntax** (current):
   ```liquid
   {% include pdf-viewer.html file="file.pdf" %}
   ```

3. **File location**: Move PDFs to `/assets/pdfs/` if not already there

4. **Update posts**: Replace old include syntax with new format

## Support

This implementation uses:
- [Mozilla PDF.js](https://mozilla.github.io/pdf.js/) - Official PDF viewer
- [PDF.js CDN](https://cdnjs.cloudflare.com/ajax/libs/pdf.js/) - Hosted resources

For issues with the PDF viewer itself, refer to [PDF.js documentation](https://mozilla.github.io/pdf.js/).
