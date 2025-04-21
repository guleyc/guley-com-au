/**
 * Lightweight Code Block Enhancement Script
 * - No dependencies required
 * - Adds copy button to code blocks
 * - Shows line numbers
 * - Maintains language indicator
 * - Prevents line wrapping
 */
document.addEventListener('DOMContentLoaded', function() {
    // Apply to all code blocks
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(function(pre) {
      // Skip if already processed
      if (pre.classList.contains('enhanced')) return;
      
      // Mark as processed
      pre.classList.add('enhanced');
      
      // Create wrapper for styling
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      
      // Get language if available
      const code = pre.querySelector('code');
      const codeEl = code || pre;
      let language = '';
      
      if (code) {
        // Try to detect language from class
        for (const cls of code.classList) {
          if (cls.startsWith('language-') || cls.startsWith('lang-')) {
            language = cls.replace('language-', '').replace('lang-', '');
            break;
          }
        }
      }
      
      // Create header with language and copy button
      const header = document.createElement('div');
      header.className = 'code-header';
      
      // Add language indicator if available
      if (language) {
        const langIndicator = document.createElement('span');
        langIndicator.className = 'code-language';
        langIndicator.textContent = language;
        header.appendChild(langIndicator);
      }
      
      // Create copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-button';
      copyBtn.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
      copyBtn.title = 'Copy code to clipboard';
      copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
      header.appendChild(copyBtn);
      
      // Insert header before code
      wrapper.insertBefore(header, pre);
      
      // Ensure code doesn't wrap
      pre.style.whiteSpace = 'pre';
      pre.style.wordBreak = 'keep-all';
      pre.style.overflowX = 'auto';
      if (code) {
        code.style.whiteSpace = 'pre';
        code.style.wordBreak = 'keep-all';
      }
      
      // Add line numbers
      const codeText = codeEl.textContent;
      const codeLines = codeText.split('\n');
      const lineCount = codeLines.length - (codeLines[codeLines.length - 1].trim() === '' ? 1 : 0);
      
      if (lineCount > 1) {
        // Create line numbers container
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        // Create line number elements
        for (let i = 0; i < lineCount; i++) {
          const lineNumber = document.createElement('span');
          lineNumber.textContent = (i + 1).toString();
          lineNumbers.appendChild(lineNumber);
        }
        
        // Insert line numbers
        wrapper.insertBefore(lineNumbers, pre);
        
        // Add class to indicate line numbers are present
        pre.classList.add('has-line-numbers');
      }
      
      // Copy button click handler
      copyBtn.addEventListener('click', function() {
        // Get code text only
        const textToCopy = codeLines.join('\n').trim();
        
        // Use Clipboard API
        navigator.clipboard.writeText(textToCopy).then(function() {
          copyBtn.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>';
          
          // Reset button after 2 seconds
          setTimeout(function() {
            copyBtn.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
          }, 2000);
        }).catch(function() {
          copyBtn.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg>';
          
          // Reset button after 2 seconds
          setTimeout(function() {
            copyBtn.innerHTML = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>';
          }, 2000);
        });
      });
    });
  });