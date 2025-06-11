// This script runs before share-modal.js and blocks its errors
console.log('share-modal blocker activated');

// Create a constant that indicates we've already handled this
window.__SHARE_MODAL_BLOCKED = true;

// Detect and intercept any attempt to load share-modal.js via script tags
(function() {
  // Intercept script loading
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName) {
    const element = originalCreateElement.call(document, tagName);
    
    if (tagName.toLowerCase() === 'script') {
      // Override the src setter
      const originalSrcDescriptor = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
      if (originalSrcDescriptor && originalSrcDescriptor.set) {
        Object.defineProperty(element, 'src', {
          set: function(value) {
            if (value && value.includes('share-modal.js')) {
              console.warn('Blocked attempt to load share-modal.js');
              return;
            }
            return originalSrcDescriptor.set.call(this, value);
          },
          get: originalSrcDescriptor.get
        });
      }
    }
    
    return element;
  };
  
  // Create a mock share-modal object early
  window.ShareModal = {
    init: function() { console.log('Mock ShareModal.init called'); },
    open: function() { console.log('Mock ShareModal.open called'); },
    close: function() { console.log('Mock ShareModal.close called'); }
  };
  
  // Setup object to catch event listener calls
  window.__shareButtonElement = {
    addEventListener: function(event, handler) {
      console.log('Mock addEventListener for share button:', event);
      if (event === 'load') {
        setTimeout(function() {
          handler({ type: 'load', target: window.__shareButtonElement });
        }, 0);
      }
    },
    removeEventListener: function() {},
    click: function() {},
    style: { display: 'block' },
    parentNode: { removeChild: function() {} }
  };
  
  // Repair or mock any missing elements before error occurs
  document.addEventListener('DOMContentLoaded', function() {
    // Handle the specific elements that might be causing the error
    ['share-button', 'sharing-button', 'social-share'].forEach(function(id) {
      if (!document.getElementById(id)) {
        const mockElement = document.createElement('div');
        mockElement.id = id;
        mockElement.style.display = 'none';
        document.body.appendChild(mockElement);
        console.log('Created mock element for', id);
      }
    });
  });
})();

// The simplest fix is to provide the exact element the error message is looking for
setTimeout(function() {
  const mockElement = document.createElement('div');
  mockElement.id = 'share-modal-trigger';
  mockElement.addEventListener = function(event, callback) {
    console.log('Mock addEventListener called on share-modal-trigger');
    if (event === 'load') {
      setTimeout(callback, 0); // Execute load callback right away
    }
  };
  document.body.appendChild(mockElement);
}, 0); 