// Enhanced Accessibility Fix Script

function addAriaLabels() {
  // Add aria-labels to buttons without text
  document.querySelectorAll('button:not([aria-label]):not([title])').forEach(button => {
    button.setAttribute('aria-label', 'Perform Action');
  });

  // Add noopener to external links
  document.querySelectorAll('a[target="_blank"]:not([rel*="noopener"])').forEach(link => {
    link.setAttribute('rel', (link.getAttribute('rel') || '') + ' noopener noreferrer');
  });
}

function migrateInlineStyles() {
  const styleMap = new Map();
  
  document.querySelectorAll('[style]').forEach(element => {
    const inlineStyle = element.getAttribute('style');
    const className = `dynamic-style-${Math.random().toString(36).substr(2, 9)}`;
    
    styleMap.set(className, inlineStyle);
    element.classList.add(className);
    element.removeAttribute('style');
  });

  // Optional: Output style map for external CSS generation
  console.log(Object.fromEntries(styleMap));
}

function validateMetaTags() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const requiredMeta = {
    'charset': 'UTF-8',
    'viewport': 'width=device-width, initial-scale=1.0'
  };

  Object.entries(requiredMeta).forEach(([name, content]) => {
    const meta = document.querySelector(`meta[${name.includes('-') ? 'http-equiv' : 'name'}="${name}"]`);
    if (!meta) {
      const newMeta = document.createElement('meta');
      name.includes('-') ? newMeta.setAttribute('http-equiv', name) : newMeta.setAttribute('name', name);
      newMeta.setAttribute('content', content);
      head.appendChild(newMeta);
    }
  });
}

function addImageAltText() {
  document.querySelectorAll('img:not([alt])').forEach(img => {
    const altText = img.getAttribute('title') || img.getAttribute('aria-label') || 'Descriptive image'; 
    img.setAttribute('alt', altText);
  });
}

function enhanceFormAccessibility() {
  document.querySelectorAll('input, select, textarea').forEach(input => {
    if (!input.id) {
      input.id = `input-${Math.random().toString(36).substr(2, 9)}`;
    }
    if (!input.getAttribute('aria-label') && !document.querySelector(`label[for="${input.id}"]`)) {
      input.setAttribute('aria-label', input.placeholder || 'Input field');
    }
  });
}

function validateHeadingHierarchy() {
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  let currentLevel = 1;

  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1]);
    if (level > currentLevel + 1) {
      console.warn(`Invalid heading hierarchy: ${heading.tagName} after h${currentLevel}`);
    }
    currentLevel = level;
  });
}

function addAriaRoles() {
  document.querySelectorAll('nav, main, aside, article, section').forEach(element => {
    if (!element.getAttribute('role')) {
      element.setAttribute('role', element.tagName.toLowerCase());
    }
  });
}

// Run all accessibility enhancements
document.addEventListener('DOMContentLoaded', () => {
  addAriaLabels();
  migrateInlineStyles();
  validateMetaTags();
  addImageAltText();
  enhanceFormAccessibility();
  validateHeadingHierarchy();
  addAriaRoles();
});
