document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((codeBlock) => {
      const codeElement = codeBlock.querySelector('code');
      if (codeElement) {
        // Get code content
        const code = codeElement.textContent;
  
        // Create the copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.type = 'button';
        copyButton.innerHTML = '<i class="fa fa-copy"></i> Copy';
        
        // Identify the language if available
        const highlightClass = Array.from(codeBlock.classList).find(cls => cls.startsWith('language-'));
        const language = highlightClass ? highlightClass.replace('language-', '') : 'code';
        
        // Add language indicator
        const languageIndicator = document.createElement('div');
        languageIndicator.className = 'code-language';
        languageIndicator.textContent = language;
        
        // Add line numbers
        const lines = code.trim().split('\n');
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        // Create line number elements
        for (let i = 0; i < lines.length; i++) {
          const lineNumber = document.createElement('span');
          lineNumber.className = 'line-number';
          lineNumber.textContent = i + 1;
          lineNumbers.appendChild(lineNumber);
        }
        
        // Format the code with line numbers
        const formattedCode = document.createElement('div');
        formattedCode.className = 'formatted-code';
        
        const codeContent = document.createElement('div');
        codeContent.className = 'code-content';
        codeContent.innerHTML = codeElement.innerHTML;
        
        formattedCode.appendChild(lineNumbers);
        formattedCode.appendChild(codeContent);
        
        // Add the elements to the code block
        codeBlock.classList.add('code-block-container');
        codeBlock.innerHTML = '';
        codeBlock.appendChild(languageIndicator);
        codeBlock.appendChild(copyButton);
        codeBlock.appendChild(formattedCode);
        
        // Add copy event
        copyButton.addEventListener('click', () => {
          // Only copy the code text, not the line numbers
          const textToCopy = lines.join('\n');
          navigator.clipboard.writeText(textToCopy).then(() => {
            // Visual feedback for copying
            copyButton.innerHTML = '<i class="fa fa-check"></i> Copied!';
            setTimeout(() => {
              copyButton.innerHTML = '<i class="fa fa-copy"></i> Copy';
            }, 2000);
          }).catch(err => {
            console.error('Could not copy text: ', err);
            copyButton.innerHTML = '<i class="fa fa-times"></i> Error!';
            setTimeout(() => {
              copyButton.innerHTML = '<i class="fa fa-copy"></i> Copy';
            }, 2000);
          });
        });
      }
    });
  });