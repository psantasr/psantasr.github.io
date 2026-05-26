// 1. Our translation dictionary
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-heading": "Welcome to My Portfolio!",
        "home-subheading": "Click the menu items above to interact.",
        "about-heading": "About Me",
        "about-subheading": "I am a creator building cool things on GitHub.",
        "projects-heading": "My Projects",
        "projects-subheading": "Check out my latest work and case studies.",
        "contact-heading": "Get In Touch",
        "contact-subheading": "Email me at: paulasantas@outlook.com\nLinkedIn: linkedin.com/in/psantasr\nGitHub: github.com/psantasr"
    },
    es: {
        "nav-home": "Inicio",
        "nav-about": "Sobre Mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "home-heading": "¡Bienvenido a mi Portafolio!",
        "home-subheading": "Haz clic en los elementos del menú para interactuar.",
        "about-heading": "Sobre Mí",
        "about-subheading": "Soy un creador desarrollando cosas geniales en GitHub.",
        "projects-heading": "Mis Proyectos",
        "projects-subheading": "Mira mis últimos trabajos y casos de estudio.",
        "contact-heading": "Contacto",
        "contact-subheading": "paulasantas@outlook.com\nLinkedIn: linkedin.com/in/psantasr\nGitHub: github.com/psantasr"
    }
};

// 2. Track the current language and current active page view
let currentLang = 'en';
let currentPage = 'Home';

// 3. Helper to set translated text and preserve line breaks
function setTranslatedText(element, key) {
    const translation = translations[currentLang][key];
    if (!translation) return;
    element.innerHTML = translation.replace(/\n/g, '<br>');
}

// 4. Function to change pages (Updated to respect the active language)
function changePage(pageName) {
    currentPage = pageName; // Save which page view we are on
    
    const heading = document.getElementById('main-heading');
    const subheading = document.getElementById('sub-heading');

    // Convert page name to lowercase to match our dictionary keys (e.g., 'about')
    const keyPrefix = pageName.toLowerCase(); 

    // Dynamically set the data-key so the translator knows what text this element holds
    heading.setAttribute('data-key', `${keyPrefix}-heading`);
    subheading.setAttribute('data-key', `${keyPrefix}-subheading`);

    // Fetch the correct translation from our dictionary
    setTranslatedText(heading, `${keyPrefix}-heading`);
    setTranslatedText(subheading, `${keyPrefix}-subheading`);
}

// 5. Function to toggle the language back and forth
function toggleLanguage() {
    const toggleBtn = document.getElementById('lang-toggle');

    // Switch the language variable
    if (currentLang === 'en') {
        currentLang = 'es';
        toggleBtn.textContent = "ENG"; // Button shows the option to switch back
    } else {
        currentLang = 'en';
        toggleBtn.textContent = "ESP";
    }

    // Find ALL elements on the page that have a "data-key" attribute
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    // Loop through them and swap their text based on our dictionary
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        setTranslatedText(element, key);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changePage('Home');
});