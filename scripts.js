// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Example of form submission logic
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Reset form
        form.reset();
    });
    
    // Example map placeholder logic
    const map = document.getElementById('map');
    if (map) {
        map.textContent = 'Map functionality will go here.';
    }
});
