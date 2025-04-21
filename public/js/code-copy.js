document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('div.highlight');
    
    codeBlocks.forEach((codeBlock) => {
      // Get language class if available
      const languageClass = Array.from(codeBlock.classList).find(cls => cls.startsWith('language-'));
      const language = languageClass ? languageClass.replace('language-', '') : '';
      
      // Create code block wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      codeBlock.parentNode.insertBefore(wrapper, codeBlock);
      wrapper.appendChild(codeBlock);
      
      // Create header with language and copy button
      const header = document.createElement('div');
      header.className = 'code-header';
      
      // Language label
      const languageLabel = document.createElement('span');
      languageLabel.className = 'code-language';
      languageLabel.textContent = language || 'code';
      header.appendChild(languageLabel);
      
      // Copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.innerHTML = '<i class="fa fa-copy"></i>';
      copyButton.title = 'Copy code to clipboard';
      header.appendChild(copyButton);
      
      // Add header before code block
      wrapper.insertBefore(header, codeBlock);
      
      // Add line numbers
      const pre = codeBlock.querySelector('pre');
      if (pre) {
        const code = pre.querySelector('code') || pre;
        const codeText = code.textContent;
        const lines = codeText.split('\n');
        
        // Create line number container
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        // Add each line number
        lines.forEach((line, i) => {
          if (i < lines.length - 1 || lines[lines.length - 1].trim() !== '') {
            const lineNumber = document.createElement('span');
            lineNumber.className = 'line-number';
            lineNumber.textContent = i + 1;
            lineNumbers.appendChild(lineNumber);
          }
        });
        
        // Add line numbers before code
        pre.classList.add('has-line-numbers');
        pre.insertBefore(lineNumbers, code);
        
        // Copy event
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(codeText.trim()).then(() => {
            copyButton.innerHTML = '<i class="fa fa-check"></i>';
            setTimeout(() => {
              copyButton.innerHTML = '<i class="fa fa-copy"></i>';
            }, 2000);
          });
        });
      }
    });
  });