const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-greeting": "Hi, this is",
        "home-name": "Your Name.",
        "home-bio": "As a passionate creator specializing in web development, I build custom digital experiences and interactive tools on GitHub.",
        "home-subheading": "Scroll down or use the menu items above to explore my work.",
        "about-heading": "About Me",
        "about-text": "I am a creator building cool things on GitHub. Welcome to my space!",
        "projects-heading": "My Projects",
        "projects-text": "Check out my latest work and case studies below.",
        "contact-heading": "Get In Touch",
        "contact-text": "Email me at: myemail@example.com"
    },
    es: {
        "nav-home": "Inicio",
        "nav-about": "Sobre Mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "home-greeting": "Hola, mi nombre es",
        "home-name": "Tu Nombre.",
        "home-bio": "Como creador apasionado especializado en desarrollo web, construyo experiencias digitales personalizadas y herramientas interactivas en GitHub.",
        "home-subheading": "Desplázate hacia abajo o usa el menú de arriba para explorar mi trabajo.",
        "about-heading": "Sobre Mí",
        "about-text": "Soy un creador desarrollando cosas geniales en GitHub. ¡Bienvenido!",
        "projects-heading": "Mis Proyectos",
        "projects-text": "Mira mis últimos trabajos y casos de estudio abajo.",
        "contact-heading": "Contacto",
        "contact-text": "Envíame un correo a: miemail@example.com"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    const toggleBtn = document.getElementById('lang-toggle');

    if (currentLang === 'en') {
        currentLang = 'es';
        toggleBtn.textContent = "ENG";
    } else {
        currentLang = 'en';
        toggleBtn.textContent = "ESP";
    }

    const elementsToTranslate = document.querySelectorAll('[data-key]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}