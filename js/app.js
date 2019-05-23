document.querySelectorAll('.nav .nav-link').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(enlace.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});