document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'a') {
        event.preventDefault();
    }
});

document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});