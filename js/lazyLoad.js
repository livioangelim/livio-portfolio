/**
 * Lazy loading implementation for images and videos
 * Improves page load performance by loading media only when needed
 */

// Function to handle lazy loading using Intersection Observer API
function initLazyLoading() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for browsers that don't support IntersectionObserver
        loadAllLazyMedia();
        return;
    }

    // Create an observer for images and videos
    const mediaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const media = entry.target;

                // Handle different media types
                if (media.tagName === 'IMG') {
                    // For images
                    if (media.dataset.src) {
                        media.src = media.dataset.src;
                        media.removeAttribute('data-src');
                    }
                } else if (media.tagName === 'IFRAME') {
                    // For iframes (videos)
                    if (media.dataset.src) {
                        media.src = media.dataset.src;
                        media.removeAttribute('data-src');
                    }
                } else if (media.tagName === 'VIDEO') {
                    // For video elements
                    if (media.dataset.src) {
                        media.src = media.dataset.src;
                        media.load();
                        media.removeAttribute('data-src');
                    }

                    // Also handle source elements within videos
                    const sources = media.querySelectorAll('source[data-src]');
                    sources.forEach(source => {
                        source.src = source.dataset.src;
                        source.removeAttribute('data-src');
                    });
                }

                // Remove the lazy-load class
                media.classList.remove('lazy-load');

                // Stop observing this element
                observer.unobserve(media);
            }
        });
    }, {
        rootMargin: '200px 0px', // Load when within 200px of viewport
        threshold: 0.01 // Trigger when at least 1% of the element is visible
    });

    // Select all elements with the lazy-load class
    const lazyMediaElements = document.querySelectorAll('.lazy-load');
    lazyMediaElements.forEach(media => {
        mediaObserver.observe(media);
    });
}

// Fallback function for browsers without IntersectionObserver
function loadAllLazyMedia() {
    const lazyMediaElements = document.querySelectorAll('.lazy-load');

    lazyMediaElements.forEach(media => {
        if (media.dataset.src) {
            if (media.tagName === 'VIDEO') {
                media.src = media.dataset.src;
                media.load();
            } else {
                media.src = media.dataset.src;
            }
            media.removeAttribute('data-src');
        }

        if (media.tagName === 'VIDEO') {
            const sources = media.querySelectorAll('source[data-src]');
            sources.forEach(source => {
                source.src = source.dataset.src;
                source.removeAttribute('data-src');
            });
        }

        media.classList.remove('lazy-load');
    });
}

// Re-run lazy loading after DOM changes (for dynamically loaded content)
function refreshLazyLoading() {
    // Get all newly added lazy-load elements that don't have observers yet
    const newLazyMedia = document.querySelectorAll('.lazy-load:not(.observed)');

    if (newLazyMedia.length > 0 && 'IntersectionObserver' in window) {
        initLazyLoading();
    }
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Refresh lazy loading when content is dynamically added
const observer = new MutationObserver((mutations) => {
    let shouldRefresh = false;

    mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            shouldRefresh = true;
        }
    });

    if (shouldRefresh) {
        refreshLazyLoading();
    }
});

// Start observing DOM changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});