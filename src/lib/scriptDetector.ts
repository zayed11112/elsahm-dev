/**
 * Helper utility to detect dynamically injected scripts
 * This can help identify where scripts like share-modal.js are coming from
 */

export function detectScriptInjection() {
  console.log('Setting up aggressive script blocker for share-modal.js');
  
  // Block any script with 'share-modal.js' in its URL
  const blockShareModalRequests = () => {
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...rest) {
      if (url && typeof url === 'string' && url.includes('share-modal.js')) {
        console.warn('🛑 Blocked XHR request to share-modal.js:', url);
        // Return a dummy request that does nothing
        return;
      }
      return originalOpen.apply(this, [method, url, ...rest] as any);
    };
    
    // Also block fetch requests
    const originalFetch = window.fetch;
    window.fetch = function(input, init) {
      const url = typeof input === 'string' ? input : input instanceof Request ? input.url : '';
      if (url && url.includes('share-modal.js')) {
        console.warn('🛑 Blocked fetch request to share-modal.js:', url);
        // Return a dummy promise
        return Promise.resolve(new Response('/* blocked */', { status: 200 }));
      }
      return originalFetch(input, init);
    };
  };
  
  // Keep track of the original appendChild method
  const originalAppendChild = Node.prototype.appendChild;

  // Override the appendChild method to log when scripts are added
  Node.prototype.appendChild = function(this: Node, node: Node) {
    // Check if the node is a script element
    if (node instanceof HTMLScriptElement) {
      console.log('Script detected:', {
        src: (node as HTMLScriptElement).src,
        type: (node as HTMLScriptElement).type,
        content: (node as HTMLScriptElement).innerText.substring(0, 100) + (node.textContent && node.textContent.length > 100 ? '...' : ''),
      });
      
      // If this is the share-modal.js script, log more details or block it
      if ((node as HTMLScriptElement).src && 
          (node as HTMLScriptElement).src.includes('share-modal.js')) {
        console.warn('❌ share-modal.js script detected and prevented from loading');
        console.trace('Script injection trace:');
        // Return a dummy element instead of the actual script to prevent errors
        const dummyScript = document.createElement('script');
        dummyScript.type = 'text/javascript';
        dummyScript.text = `
          // Mock share modal functionality
          console.log('Using mocked share-modal.js');
          window.ShareModalFeature = {
            init: function() { console.log('Mock share modal initialized'); },
            open: function() { console.log('Mock share modal opened'); },
            close: function() { console.log('Mock share modal closed'); }
          };
          
          // Provide dummy functions for any possible addEventListener calls
          document.addEventListener('DOMContentLoaded', function() {
            // Create a global mock for any missing elements that might be causing errors
            window.__mockElement = {
              addEventListener: function() { console.log('Mock addEventListener called'); },
              removeEventListener: function() { console.log('Mock removeEventListener called'); },
              click: function() { console.log('Mock click called'); }
            };
            
            // Override getElementById to return our mock for null results
            const originalGetElementById = document.getElementById;
            document.getElementById = function(id) {
              const element = originalGetElementById.call(document, id);
              if (!element && id && (id.includes('share') || id === 'sharing-button')) {
                console.log('Returning mock element for ID:', id);
                return window.__mockElement;
              }
              return element;
            };
          });
        `;
        return originalAppendChild.call(this, dummyScript);
      }
    }
    
    // Call the original appendChild method
    return originalAppendChild.call(this, node);
  };
  
  // Also monitor the insertBefore method
  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(this: Node, node: Node, referenceNode: Node | null) {
    if (node instanceof HTMLScriptElement) {
      console.log('Script detected (insertBefore):', {
        src: (node as HTMLScriptElement).src,
        type: (node as HTMLScriptElement).type,
        content: (node as HTMLScriptElement).innerText.substring(0, 100) + (node.textContent && node.textContent.length > 100 ? '...' : ''),
      });
      
      if ((node as HTMLScriptElement).src && 
          (node as HTMLScriptElement).src.includes('share-modal.js')) {
        console.warn('❌ share-modal.js script prevented from loading via insertBefore');
        const dummyScript = document.createElement('script');
        dummyScript.type = 'text/javascript';
        dummyScript.text = '/* share-modal.js blocked */';
        return originalInsertBefore.call(this, dummyScript, referenceNode);
      }
    }
    
    return originalInsertBefore.call(this, node, referenceNode);
  };
  
  // Monitor DOM mutations for script tags
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLScriptElement) {
            console.log('Script added via DOM mutation:', {
              src: (node as HTMLScriptElement).src,
            });
          }
        });
      }
    });
  });
  
  // Start observing the document
  observer.observe(document, { 
    childList: true, 
    subtree: true 
  });

  // Immediately execute our request blocker
  blockShareModalRequests();

  // Add defensive mock objects as early as possible
  document.addEventListener('DOMContentLoaded', function() {
    // Add mock share functionality to window
    window.shareModalInit = function() { 
      console.log('Mock shareModalInit called'); 
    };
  });
  
  console.log('Script detector initialized with enhanced protection');
} 