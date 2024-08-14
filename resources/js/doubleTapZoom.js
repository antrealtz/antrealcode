let lastTouchEnd = 0;

document.addEventListener('touchend', function preventDoubleTapZoom(e) {
    const now = new Date().getTime();

    if (now - lastTouchEnd <= 300) {
        e.preventDefault();  // Prevents the double-tap zoom behavior
    }

    lastTouchEnd = now;
}, false);
