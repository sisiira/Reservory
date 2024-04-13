window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', event => {
        event.target.classList.toggle('zoomed');
    });
});