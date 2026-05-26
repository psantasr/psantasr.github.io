// 1. Our translation dictionary
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-heading": "Welcome to My Portfolio!",
        "home-subheading": "Scroll down or use the menu to explore.",
        "about-heading": "About Me",
        "about-text": "I am a Mechanical Engineering graduate with minors in Biomedical and Robotics Engineering, focused on product development. Proven track record of delivering projects on time, on cost, and on spec while supporting cross-functional teams through DFMA-driven design optimization. Skilled in 3D modeling, prototyping, and iterative design using tools like SolidWorks and Onshape. Complemented by research experiencedesigning precision jigs for biomedical experiments, demonstrating strong problem-solving and critical thinking abilities.",
        "projects-heading": "My Projects",
        "projects-text": "Check out my latest work and case studies below.",
        "contact-heading": "Get In Touch",
        "contact-text": "Email me at: paulasantas@outlook.com\nLinkedIn: linkedin.com/in/psantasr\nGitHub: github.com/psantasr"
    },
    es: {
        "nav-home": "Inicio",
        "nav-about": "Sobre Mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "home-heading": "¡Bienvenido a mi Portafolio!",
        "home-subheading": "Desplázate hacia abajo o usa el menú para explorar.",
        "about-heading": "Sobre Mí",
        "about-text": "Soy un creador desarrollando cosas geniales en GitHub. ¡Bienvenido a mi espacio!",
        "projects-heading": "Mis Proyectos",
        "projects-text": "Mira mis últimos trabajos y casos de estudio a continuación.",
        "contact-heading": "Contacto",
        "contact-text": "paulasantas@outlook.com\nLinkedIn: linkedin.com/in/psantasr\nGitHub: github.com/psantasr"
    }
};

// 2. Track the current language
let currentLang = 'en';

// 3. Helper to set translated text and preserve line breaks
function setTranslatedText(element, key) {
    const translation = translations[currentLang][key];
    if (!translation) return;
    element.innerHTML = translation.replace(/\n/g, '<br>');
}

// 4. Translate the whole page
function translatePage() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        setTranslatedText(element, key);
    });
}

// 5. Function to toggle the language back and forth
function toggleLanguage() {
    const toggleBtn = document.getElementById('lang-toggle');
    currentLang = currentLang === 'en' ? 'es' : 'en';
    toggleBtn.textContent = currentLang === 'en' ? 'ESP' : 'ENG';
    translatePage();
}

document.addEventListener('DOMContentLoaded', translatePage);
