/**
 * Code Block Enhancement Script
 * 
 * This script adds the following features to code blocks:
 * 1. Copy button for easily copying code
 * 2. Language label to identify the programming language
 * 3. Prevents line wrapping ensuring correct line numbers
 * 4. Enables horizontal scrolling for long code lines
 */

document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('div.highlight, pre');
    
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
      
      // Handle pre elements
      const pre = codeBlock.tagName.toLowerCase() === 'pre' ? codeBlock : codeBlock.querySelector('pre');
      if (pre) {
        // Ensure pre element doesn't wrap text
        pre.style.whiteSpace = 'pre';
        pre.style.wordWrap = 'normal';
        pre.style.overflowX = 'auto';
        
        const code = pre.querySelector('code') || pre;
        // Ensure code element doesn't wrap text
        if (code) {
          code.style.whiteSpace = 'pre';
          code.style.wordWrap = 'normal';
        }
        
        const codeText = code.textContent;
        const lines = codeText.split('\n');
        
        // Create line number container
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        // Add each line number
        lines.forEach((line, i) => {
          // Don't add a line number for the last line if it's empty
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
          // Copy only the actual code, not the line numbers
          navigator.clipboard.writeText(codeText.trim()).then(() => {
            // Visual feedback for successful copy
            copyButton.innerHTML = '<i class="fa fa-check"></i>';
            setTimeout(() => {
              copyButton.innerHTML = '<i class="fa fa-copy"></i>';
            }, 2000);
          }).catch(err => {
            // Handle errors
            console.error('Failed to copy: ', err);
            copyButton.innerHTML = '<i class="fa fa-times"></i>';
            setTimeout(() => {
              copyButton.innerHTML = '<i class="fa fa-copy"></i>';
            }, 2000);
          });
        });
      }
    });
    
    // Add CSS for horizontal scrolling indicator on mobile
    if (window.innerWidth <= 768) {
      const style = document.createElement('style');
      style.textContent = `
        .code-block-wrapper {
          position: relative;
        }
        .code-block-wrapper::after {
          content: '';
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 16px;
          height: 16px;
          background: rgba(0,0,0,0.1);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.7;
          animation: scrollHint 2s infinite;
        }
        @keyframes scrollHint {
          0% { transform: translateX(-5px); opacity: 0.7; }
          50% { transform: translateX(5px); opacity: 1; }
          100% { transform: translateX(-5px); opacity: 0.7; }
        }
      `;
      document.head.appendChild(style);
    }
  });