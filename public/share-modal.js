// Replacement for problematic share-modal.js
console.log('Using patched share-modal.js');

// Safe implementation that won't throw errors
(function() {
  // Create a safe wrapper for share functionality
  window.shareModalInit = function() {
    console.log('Share modal initialized safely');
  };

  // Initialize web share API if available
  if (typeof navigator !== 'undefined' && navigator.share) {
    const shareElements = document.querySelectorAll('[data-share]');
    shareElements.forEach(element => {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        const url = this.getAttribute('data-share-url') || window.location.href;
        const title = this.getAttribute('data-share-title') || document.title;
        const text = this.getAttribute('data-share-text') || '';
        
        navigator.share({
          title: title,
          text: text,
          url: url
        }).catch(err => console.log('Sharing failed:', err));
      });
    });
  }
})(); 