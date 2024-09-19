//1. Performance Issues
// Inefficient use of innerHTML
function updateContent() {
    const container = document.getElementById('container');
    let html = '';
    for (let i = 0; i < 1000; i++) {
      html += `<div>Item ${i}</div>`;
    }
    container.innerHTML = html; // Re-rendering entire content
  }

  
  // Efficient use of DOM manipulation
function updateContent() {
    const container = document.getElementById('container');
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 1000; i++) {
      const div = document.createElement('div');
      div.textContent = `Item ${i}`;
      fragment.appendChild(div);
    }
    
    container.innerHTML = ''; // Clear existing content
    container.appendChild(fragment); // Append new content
  }

  
  //2. Security Risks (XSS Vulnerabilities)
  // Potential XSS vulnerability
function setContent(userInput) {
    const container = document.getElementById('container');
    container.innerHTML = userInput; // Directly setting user input
  }
  

  // Safe use of textContent
function setContent(userInput) {
    const container = document.getElementById('container');
    const safeContent = document.createTextNode(userInput);
    container.innerHTML = ''; // Clear existing content
    container.appendChild(safeContent); // Safely append user input
  }
  