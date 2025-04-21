document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((codeBlock) => {
      if (codeBlock.querySelector('code')) {
        // Create the copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.type = 'button';
        copyButton.innerText = 'Copy';
        
        // Add the button to the code block
        codeBlock.classList.add('code-block-container');
        codeBlock.appendChild(copyButton);
        
        // Add copy event
        copyButton.addEventListener('click', () => {
          const code = codeBlock.querySelector('code').innerText.trim();
          navigator.clipboard.writeText(code).then(() => {
            // Visual feedback for copying
            copyButton.innerText = 'Copied!';
            setTimeout(() => {
              copyButton.innerText = 'Copy';
            }, 2000);
          }).catch(err => {
            console.error('Could not copy text: ', err);
            copyButton.innerText = 'Error!';
            setTimeout(() => {
              copyButton.innerText = 'Copy';
            }, 2000);
          });
        });
      }
    });
  });