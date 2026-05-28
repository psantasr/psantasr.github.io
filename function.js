const translations = {
    en: {
        "nav-home": "Home",
        "nav-work experience": "Work Experience",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-greeting": "Hi, this is",
        "home-name": "Paula Santas Rodriguez.",
        "home-bio": "I am a Mechanical Engineering graduate with minors in Biomedical and Robotics Engineering, focused on product development. Proven track record of delivering projects on time, on cost, and on spec while supporting cross-functional teams through DFMA-driven design optimization. Skilled in 3D modeling, prototyping, and iterative design using tools like SolidWorks and Onshape. Complemented by research experiencedesigning precision jigs for biomedical experiments, demonstrating strong problem-solving and critical thinking abilities.",
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
        "home-name": "Paula Santas Rodriguez.",
        "home-bio": "Soy ingeniera mecánica graduada con especializaciones en ingeniería biomédica y robótica, enfocada en el desarrollo de productos. Cuento con una sólida trayectoria en la entrega de proyectos a tiempo, dentro del presupuesto y cumpliendo con las especificaciones, brindando apoyo a equipos multidisciplinarios mediante la optimización del diseño basada en DFMA. Poseo experiencia en modelado 3D, creación de prototipos y diseño iterativo utilizando herramientas como SolidWorks y Onshape. Además, cuento con experiencia en investigación diseñando utillajes de precisión para experimentos biomédicos, demostrando una gran capacidad para la resolución de problemas y el pensamiento crítico.",
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