const translations = {
    en: {
        "nav-home": "Home",
        "nav-work experience": "Work Experience",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-greeting": "Hi, this is",
        "home-name": "Your Name.",
        "home-bio": "As a passionate creator specializing in web development, I build custom digital experiences and interactive tools on GitHub.",
        "home-subheading": "Scroll down or use the menu items above to explore my work.",
        "work experience-heading": "Work Experience",
        "work experience-text": "Here's what I've done so far.",
        "projects-heading": "My Projects",
        "projects-text": "Check out my latest work and case studies below.",
        "contact-heading": "Get In Touch",
        "contact-text": "Email me at: myemail@example.com"
    },
    es: {
        "nav-home": "Inicio",
        "nav-work experience": "Experiencia Laboral",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "home-greeting": "Hola, mi nombre es",
        "home-name": "Tu Nombre.",
        "home-bio": "Como creador apasionado especializado en desarrollo web, construyo experiencias digitales personalizadas y herramientas interactivas en GitHub.",
        "home-subheading": "Desplázate hacia abajo o usa el menú de arriba para explorar mi trabajo.",
        "work experience-heading": "Experiencia Laboral",
        "work experience-text": "Aquí está lo que he hecho hasta ahora.",
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