// Handle tab button active states
document.addEventListener('click', function(e) {
    if (e.target.matches('button[hx-get]')) {
        // Remove active class from all tab buttons
        document.querySelectorAll('nav button').forEach(btn => {
            btn.classList.remove('border-b-2', 'border-white', 'text-white');
            btn.classList.add('text-gray-400');
        });
        
        // Add active class to clicked button
        e.target.classList.remove('text-gray-400');
        e.target.classList.add('border-b-2', 'border-white', 'text-white');
    }
});
