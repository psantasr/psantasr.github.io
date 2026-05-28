const translations = {
    en: {
        "nav-home": "Home",
        "nav-work experience": "Work Experience",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-greeting": "Hi, this is",
        "home-name": "Paula Santas Rodriguez.",
        "home-bio": "I am a Mechanical Engineering graduate with minors in Biomedical and Robotics Engineering, focused on product development. Proven track record of delivering projects on time, on cost, and on spec while supporting cross-functional teams through DFMA-driven design optimization. Skilled in 3D modeling, prototyping, and iterative design using tools like SolidWorks and Onshape. Complemented by research experience designing precision jigs for biomedical experiments, demonstrating strong problem-solving and critical thinking abilities.",
        "home-subheading": "Scroll down or use the menu items above to explore my work.",
        "work-experience-heading": "Work Experience",
        "work-experience-text": "Here's what I've done so far.",
        
        // Job 1
        "job1-date": "August 2024 - Current",
        "job1-title": "Product Development Engineer",
        "job1-company": "Spin Master Ltd.",
        "job1-desc": "Leading the development of 15+ medium to high complexity toy products from concept to production, ensuring timelines, cost targets, and technical feasibility are met. Utilizing SolidWorks and Onshape to build complex 3D models and optimizing parts using DFMA/DFM principles to achieve significant cost savings per unit.",
        
        // Job 2
        "job2-date": "June 2023 - August 2024",
        "job2-title": "R&D Mechanical Engineer",
        "job2-company": "Sunnybrook Hospital Research Institute (FUS Lab)",
        "job2-desc": "Collaborated with researchers and engineers to design and prototype custom components for experimental setups supporting focused ultrasound therapies. Created patient-centric molds and parts compliant with strict MRI and clinical environments using SolidWorks, 3D printing, and machining tools.",
        
        // Job 3
        "job3-date": "May 2022 - August 2022",
        "job3-title": "Engineering Innovation Intern",
        "job3-company": "Spin Master Ltd.",
        "job3-desc": "Designed and prototyped proof-of-concept mechanisms using SolidWorks, Fusion 360, and 3D printing. Achieved manufacturing cost reductions by optimizing material utilization and combining mechanical functions within structural CAD designs.",
        
        // Job 4
        "job4-date": "May 2021 - May 2022",
        "job4-title": "Product Development Engineering Intern",
        "job4-company": "Spin Master Ltd.",
        "job4-desc": "Managed 90+ projects across two consumer brands, providing early-stage cost estimation and feasibility studies. Led design alignment checkpoints with international global teams to proactively resolve manufacturing challenges and minimize production delays.",

        "projects-heading": "My Projects",
        "projects-text": "Check out my latest work and case studies below.",
        "contact-heading": "Get In Touch",
        "contact-text": "Email me at: paulasantas@outlook.com"
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
        "work-experience-heading": "Experiencia Laboral",
        "work-experience-text": "Aquí está lo que he hecho hasta ahora.",
        
        // Job 1 (ES)
        "job1-date": "Agosto 2024 - Presente",
        "job1-title": "Ingeniera de Desarrollo de Productos",
        "job1-company": "Spin Master Ltd.",
        "job1-desc": "Liderando el desarrollo de más de 15 productos de juguetes de mediana a alta complejidad desde el concepto hasta la producción. Uso de SolidWorks y Onshape para el modelado 3D avanzado, aplicando principios de DFMA/DFM para optimizar piezas moldeadas por inyección y soplado, logrando ahorros promedio del 10% por unidad.",
        
        // Job 2 (ES)
        "job2-date": "Junio 2023 - Agosto 2024",
        "job2-title": "Ingeniera Mecánica de R&D",
        "job2-company": "Sunnybrook Hospital Research Institute (FUS Lab)",
        "job2-desc": "Colaboración con investigadores y científicos para diseñar componentes a medida en entornos de pruebas de terapias de ultrasonido focalizado. Diseño y prototipado de moldes y utillajes compatibles con ambientes clínicos y de resonancia magnética (RMN) mediante impresión 3D y mecanizado interno.",
        
        // Job 3 (ES)
        "job3-date": "Mayo 2022 - Agosto 2022",
        "job3-title": "Pasante de Innovación en Ingeniería",
        "job3-company": "Spin Master Ltd.",
        "job3-desc": "Diseño y desarrollo de prototipos para mecanismos de prueba de concepto utilizando SolidWorks, Fusion 360 e impresión 3D. Reducción de costos de producción optimizando el uso de material y combinando funciones mecánicas en archivos CAD complejos.",
        
        // Job 4 (ES)
        "job4-date": "Mayo 2021 - Mayo 2022",
        "job4-title": "Pasante de Ingeniería de Desarrollo de Productos",
        "job4-company": "Spin Master Ltd.",
        "job4-desc": "Gestión de más de 90 proyectos para evaluar la viabilidad técnica y estimación de costos en etapas tempranas con una precisión del 10%. Liderazgo en reuniones de alineación con equipos de manufactura globales en Asia para evitar retrasos en herramientas de producción.",

        "projects-heading": "Mis Proyectos",
        "projects-text": "Mira mis últimos trabajos y casos de estudio abajo.",
        "contact-heading": "Contacto",
        "contact-text": "Envíame un correo a: paulasantas@outlook.com"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    const toggleBtn = document.getElementById('lang-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    // Toggle target state
    if (currentLang === 'en') {
        currentLang = 'es';
        if (toggleBtn) toggleBtn.textContent = "ENG";
    } else {
        currentLang = 'en';
        if (toggleBtn) toggleBtn.textContent = "ESP";
    }

    // Explicit dictionary loop rendering
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang] && translations[currentLang][key] !== undefined) {
            element.textContent = translations[currentLang][key];
        }
    });
}