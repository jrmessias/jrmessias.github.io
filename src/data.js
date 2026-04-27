// Bilingual CV data
export const CV_DATA = {
    identity: {
        name: "Israel Messias Júnior",
        initials: "IM",
        role: {pt: "Analista de Sistemas", en: "Systems Analyst"},
        company: "iopoint tecnologia",
        location: {pt: "São Miguel do Oeste, SC — Brasil", en: "São Miguel do Oeste, SC — Brazil"},
        tagline: {
            pt: "Desenvolvedor full-stack.",
            en: "Full-stack developer.",
        },
    },
    about: {
        pt: "Sou desenvolvedor de sistemas e professor de programação e tecnologias. Atuo como Analista de Sistemas na iopoint Tecnologia, desenvolvendo soluções SaaS com PHP, Laravel e Angular, além de aplicativos móveis com Flutter. Também leciono no SENAC em São Miguel do Oeste, Santa Catarina. Sou graduado em Sistemas de Informação e possuo diversas pós-graduações nas áreas de desenvolvimento, UX/UI, gestão e inovação. Participo ativamente de eventos como Techstars Startup Weekends, hackathons e encontros de inovação.",
        en: "I'm a systems developer and technology instructor. I work as a Systems Analyst at iopoint Tecnologia, building SaaS solutions with PHP, Laravel and Angular, as well as mobile applications with Flutter. I also teach at SENAC in São Miguel do Oeste, Santa Catarina. I hold a degree in Information Systems and several postgraduate specializations across development, UX/UI, management and innovation. I'm an active participant in events like Techstars Startup Weekends, hackathons and innovation meetups.",
    },
    stats: [
        {value: "15+", label: {pt: "anos de experiência", en: "years of experience"}},
        {value: "8", label: {pt: "pós-graduações", en: "postgraduate degrees"}},
        {value: "20+", label: {pt: "projetos entregues", en: "projects delivered"}},
    ],
    skills: [
        {group: {pt: "Back-end", en: "Back-end"}, items: ["PHP", "Laravel", "SQL", "MySQL", "API's"]},
        {
            group: {pt: "Front-end", en: "Front-end"},
            items: ["JavaScript", "TypeScript", "Angular", "Vue", "React", "CSS", "Tailwind", "Bootstrap", "WordPress"]
        },
        {group: {pt: "Mobile", en: "Mobile"}, items: ["Flutter"]},
        {group: {pt: "Ferramentas", en: "Tools"}, items: ["Git", "Vite", "Figma"]},
    ],
    experience: [
        {
            company: "iopoint Tecnologia",
            place: "São Miguel do Oeste — SC",
            period: {pt: "2020 — Atual", en: "2020 — Present"},
            title: {pt: "Analista de Sistemas", en: "Systems Analyst"},
            description: {
                pt: "Desenvolvimento de sistema SaaS, back-end, front-end, API e aplicativo para Android e iOS.",
                en: "SaaS system development — back-end, front-end, APIs and Android/iOS apps."
            },
            tags: ["PHP", "JS", "TS", "CSS", "HTML", "Dart", "Laravel", "Angular", "Flutter"]
        },
        {
            company: "SENAC",
            place: "São Miguel do Oeste — SC",
            period: {pt: "2023 — 2026", en: "2023 — 2026"},
            title: {pt: "Professor", en: "Instructor"},
            description: {
                pt: "Banco de Dados, elaboração e publicação de projetos web, desenvolvimento back-end e Google Workspace.",
                en: "Databases, web project design and deployment, back-end development and Google Workspace."
            },
            tags: ["SQL", "Web", "Teaching"]
        },
        {
            company: "Agência PDOIS / Disk Fácil",
            place: "São Miguel do Oeste — SC",
            period: {pt: "2018 — 2020", en: "2018 — 2020"},
            title: {pt: "Programador de Sistemas", en: "Systems Programmer"},
            description: {
                pt: "Desenvolvimento e análise de dados para sites corporativos. Front e back-end, otimização SEO, atendimento e suporte técnico.",
                en: "Development and data analysis for corporate websites. Front- and back-end, SEO, client support and technical assistance."
            },
            tags: ["Front-end", "Back-end", "SEO"]
        },
        {
            company: "DB'links Sistemas",
            place: "São Miguel do Oeste — SC",
            period: {pt: "2011 — 2017", en: "2011 — 2017"},
            title: {pt: "Full-Stack Developer", en: "Full-Stack Developer"},
            description: {
                pt: "Análise de requisitos, desenvolvimento de sites/sistemas personalizados, apps Android/iOS com tecnologias web, e-commerce integrado com ERP, templates WordPress, liderança de equipe e treinamentos internos.",
                en: "Requirements analysis, custom websites/systems, Android/iOS apps built with web tech, ERP-integrated e-commerce, WordPress templates, team leadership and internal training."
            },
            tags: ["Full-stack", "WordPress", "E-commerce", "Liderança"]
        },
    ],
    education: [
        {
            title: {pt: "Desenvolvimento Full-Stack", en: "Full-Stack Development"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "IF Sudeste MG",
            year: "—"
        },
        {
            title: {pt: "Gestão, Estratégia e Inovação", en: "Management, Strategy & Innovation"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "IF Farroupilha",
            year: "—"
        },
        {
            title: {pt: "User Experience (UX) e User Interface (UI)", en: "User Experience (UX) & User Interface (UI)"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "Faculeste",
            year: "2024"
        },
        {
            title: {pt: "Informática na Educação", en: "Computing in Education"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "IFMA",
            year: "2024"
        },
        {
            title: {pt: "Desenvolvimento de Apps Móveis", en: "Mobile App Development"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "UniBF",
            year: "2020"
        },
        {
            title: {pt: "Desenvolvimento de Jogos Digitais", en: "Digital Game Development"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "UniBF",
            year: "2020"
        },
        {
            title: {pt: "MBA em Gestão de Marcas e Produtos", en: "MBA — Brand & Product Management"},
            degree: {pt: "Pós-Graduação Lato Sensu", en: "Postgraduate (Lato Sensu)"},
            inst: "UniBF",
            year: "2020"
        },
        {
            title: {pt: "Automação Industrial", en: "Industrial Automation"},
            degree: {pt: "Técnico", en: "Technical Degree"},
            inst: "SENAI / SMO",
            year: "2017 — 2020"
        },
        {
            title: {pt: "Sistemas de Informação", en: "Information Systems"},
            degree: {pt: "Graduação", en: "Bachelor's Degree"},
            inst: "UNOESC / SMO",
            year: "2003 — 2007"
        },
    ],
    projects: [
        {
            name: "LP Ebook — Receitas Saudáveis",
            description: {
                pt: "Landing page para lançamento de ebook de receitas saudáveis com foco em conversão.",
                en: "Landing page for a healthy-recipe ebook launch, conversion-focused."
            },
            url: "https://lp-ebook-receitas-saudaveis.vercel.app/",
            tags: ["Landing page", "Vercel", "Tailwind"],
            year: "2025"
        },
        {
            name: "Web Design Descomplicado",
            description: {
                pt: "Projeto educacional sobre fundamentos de web design e desenvolvimento front-end.",
                en: "Educational project on web-design fundamentals and front-end development."
            },
            url: "https://webdesigndescomplicado.jrmessias.com.br/",
            tags: ["Education", "Front-end", "UX"],
            year: "2024"
        },
    ],
    events: [
        {
            title: {pt: "Hackathon Innova Saúde", en: "Innova Saúde Hackathon"},
            role: {pt: "Mentor", en: "Mentor"},
            year: "2025",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
        {
            title: {pt: "Hackathon Innova Saúde", en: "Innova Saúde Hackathon"},
            role: {pt: "Mentor", en: "Mentor"},
            year: "2024",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
        {
            title: {pt: "Techstars Startup Weekend Agrotech", en: "Techstars Startup Weekend Agrotech"},
            role: {pt: "Staff", en: "Staff"},
            year: "2025",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
        {
            title: {pt: "Techstars Startup Weekend", en: "Techstars Startup Weekend"},
            role: {pt: "Organização", en: "Organizer"},
            year: "2024",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
        {
            title: {pt: "Techstars Startup Weekend", en: "Techstars Startup Weekend"},
            role: {pt: "Vencedor 🏆", en: "Winner 🏆"},
            year: "2023",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
        {
            title: {pt: "Techstars Startup Weekend", en: "Techstars Startup Weekend"},
            role: {pt: "Participante", en: "Participant"},
            year: "2022",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
        {
            title: {pt: "Startup Summit", en: "Startup Summit/SC"},
            role: {pt: "Participante", en: "Participant"},
            year: "2022",
            place: "Florianópolis — SC",
            url: "#"
        },
        {
            title: {pt: "Innova Startup Extreme", en: "Innova Startup Extreme"},
            role: {pt: "Participante", en: "Participant"},
            year: "2021",
            place: "São Miguel do Oeste — SC",
            url: "#"
        },
    ],
    courses: [
        {
            title: {
                pt: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
                en: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate"
            }, institution: "Oracle", year: "2023", expire: "2025", tags: ["Cloud", "Oracle"]
        },
        {
            title: {pt: "Especialista em Produção de Conteúdo", en: "Content Production Specialist"},
            institution: "Ion Interactive",
            year: "—",
            tags: ["Marketing", "Content"]
        },
        {
            title: {pt: "Especialista em Blogs Corporativos", en: "Corporate Blogging Specialist"},
            institution: "Ion Interactive",
            year: "—",
            tags: ["Marketing", "Blog"]
        },
        {
            title: {pt: "Especialista em Marketing de Conteúdo Avançado", en: "Advanced Content Marketing Specialist"},
            institution: "Ion Interactive",
            year: "—",
            tags: ["Marketing", "Content"]
        },
        {
            title: {pt: "Curso Básico de Atendimento a Emergências - CBAE", en: "Basic Emergency Care Course - CBAE"},
            institution: "Corpo de Bombeiros Militar de Santa Catarina",
            year: "2017",
            expire: "2017",
            tags: ["Safety", "Emergency"]
        },
        {
            title: {pt: "Curso de Testes com PHPUnit", en: "PHPUnit Testing Course"},
            institution: "School of Net",
            year: "2017",
            tags: ["PHP", "Testing"]
        },
        {
            title: {pt: "Curso de Lumen", en: "Lumen Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "Lumen"]
        },
        {
            title: {pt: "Curso de Git e Github", en: "Git and Github Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["Git", "Version Control"]
        },
        {
            title: {
                pt: "D-Olho na Qualidade: 5Ss para os pequenos negócios",
                en: "D-Eye on Quality: 5S for Small Businesses"
            }, institution: "Sebrae", year: "2011", expire: "2011", tags: ["Quality", "5S"]
        },
        {
            title: {pt: "Curso de Linux no terminal", en: "Linux Terminal Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["Linux", "Terminal"]
        },
        {
            title: {pt: "Curso de Novidades do PHP 7.1", en: "PHP 7.1 New Features Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP"]
        },
        {
            title: {pt: "Curso de PSRs", en: "PSRs Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "Standards"]
        },
        {
            title: {pt: "Curso de PHP - Avançando com OO", en: "PHP - Advanced OOP Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "OOP"]
        },
        {
            title: {pt: "Curso de Composer", en: "Composer Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "Composer"]
        },
        {
            title: {pt: "Curso de Orientação a Objetos com JavaScript", en: "Object-Oriented JavaScript Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["JavaScript", "OOP"]
        },
        {
            title: {pt: "Curso de PHP 7 Novidades", en: "PHP 7 New Features Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP"]
        },
        {
            title: {pt: "Curso de PHP - Iniciando com OO", en: "PHP - Starting OOP Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "OOP"]
        },
        {
            title: {pt: "Curso de PHP com MVC", en: "PHP MVC Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "MVC"]
        },
        {
            title: {pt: "Curso de ReactJS", en: "ReactJS Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["React", "JavaScript"]
        },
        {
            title: {pt: "Curso de Webservices com PHP", en: "PHP Webservices Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["PHP", "API"]
        },
        {
            title: {pt: "Curso de Otimizações técnicas de SEO", en: "SEO Technical Optimization Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["SEO"]
        },
        {
            title: {pt: "Curso de Iniciando com Laravel 5.3", en: "Getting Started with Laravel 5.3"},
            institution: "School of Net",
            year: "2016",
            tags: ["Laravel", "PHP"]
        },
        {
            title: {pt: "Curso de APIs Rest com Django", en: "REST APIs with Django Course"},
            institution: "School of Net",
            year: "2016",
            tags: ["Python", "Django", "API"]
        },
        {
            title: {pt: "Desenvolvimento de Líderes - PDL", en: "Leadership Development - PDL"},
            institution: "SESI/SC",
            year: "2016",
            expire: "2016",
            tags: ["Leadership"]
        },
        {
            title: {pt: "Desenho Geométrico - SolidWorks", en: "Geometric Design - SolidWorks"},
            institution: "NEP - Maravilha",
            year: "2010",
            expire: "2010",
            tags: ["CAD", "SolidWorks"]
        },
        {
            title: {pt: "Torneiro Mecânico", en: "Lathe Operator"},
            institution: "IFSC",
            year: "2015",
            expire: "2015",
            tags: ["Manufacturing"]
        },
        {
            title: {
                pt: "Introdução a Programação Funcional com Clojure",
                en: "Introduction to Functional Programming with Clojure"
            }, institution: "Alura", year: "—", hours: "8", tags: ["Clojure", "Functional"]
        },
        {
            title: {pt: "Dale Carnegie Course", en: "Dale Carnegie Course"},
            institution: "Dale Carnegie Training",
            year: "2013",
            expire: "2013",
            tags: ["Soft Skills"]
        },
        {
            title: {pt: "Java 8: dos lambdas aos Streams e APIs", en: "Java 8: Lambdas to Streams and APIs"},
            institution: "Alura",
            year: "—",
            hours: "12",
            tags: ["Java"]
        },
        {
            title: {pt: "Java e suas Bibliotecas", en: "Java and its Libraries"},
            institution: "Alura",
            year: "—",
            hours: "12",
            tags: ["Java"]
        },
        {
            title: {pt: "Java e Orientação a Objetos", en: "Java and Object Orientation"},
            institution: "Alura",
            year: "—",
            hours: "12",
            tags: ["Java", "OOP"]
        },
        {
            title: {pt: "JDBC e banco de dados em Java", en: "JDBC and Databases in Java"},
            institution: "Alura",
            year: "—",
            hours: "8",
            tags: ["Java", "JDBC"]
        },
        {
            title: {pt: "Primeiros passos com Java", en: "Getting Started with Java"},
            institution: "Alura",
            year: "—",
            hours: "12",
            tags: ["Java"]
        },
        {
            title: {pt: "Eclipse: produtividade extrema", en: "Eclipse: Extreme Productivity"},
            institution: "Alura",
            year: "—",
            hours: "12",
            tags: ["IDE", "Eclipse"]
        },
        {
            title: {pt: "Design Patterns para bons programadores", en: "Design Patterns for Good Programmers"},
            institution: "Alura",
            year: "—",
            hours: "20",
            tags: ["Design Patterns"]
        },
    ],
    contact: {
        whatsapp: "https://wa.me/+55049988198409?text=Contato%20via%20site",
        github: "https://www.github.com/jrmessias",
        instagram: "https://www.instagram.com/imj.dev",
        figma: "https://www.figma.com/@jrmessias",
        lattes: "http://lattes.cnpq.br/2703556361470739",
        email: "mailto:jrmessias@gmail.com",
    },
};

export const COPY = {
    nav: {
        about: {pt: "Sobre", en: "About"},
        skills: {pt: "Habilidades", en: "Skills"},
        experience: {pt: "Experiência", en: "Experience"},
        education: {pt: "Formação", en: "Education"},
        projects: {pt: "Projetos", en: "Projects"},
        courses: {pt: "Cursos", en: "Courses"},
        events: {pt: "Eventos", en: "Events"},
        contact: {pt: "Contato", en: "Contact"},
    },
    hero: {
        available: {pt: "Disponível para projetos", en: "Available for projects"},
        cta_contact: {pt: "Entrar em contato", en: "Get in touch"},
        cta_cv: {pt: "Baixar currículo", en: "Download CV"},
        scroll: {pt: "Role para explorar", en: "Scroll to explore"},
    },
    sections: {
        about: {pt: "Sobre", en: "About"},
        skills: {pt: "Habilidades", en: "Skills"},
        experience: {pt: "Experiência", en: "Experience"},
        education: {pt: "Formação acadêmica", en: "Academic background"},
        projects: {pt: "Projetos em destaque", en: "Featured projects"},
        courses: {pt: "Cursos livres", en: "Free courses"},
        events: {pt: "Eventos & comunidade", en: "Events & community"},
        contact: {pt: "Vamos conversar", en: "Let's talk"},
    },
    section_index: {
        about: {pt: "01 — Apresentação", en: "01 — Introduction"},
        skills: {pt: "02 — Stack", en: "02 — Stack"},
        experience: {pt: "03 — Trajetória", en: "03 — Career"},
        education: {pt: "04 — Formação", en: "04 — Education"},
        projects: {pt: "05 — Trabalhos", en: "05 — Work"},
        courses: {pt: "06 — Cursos", en: "06 — Courses"},
        events: {pt: "07 — Eventos", en: "07 — Events"},
        contact: {pt: "08 — Contato", en: "08 — Contact"},
    },
    contact: {
        lead: {
            pt: "Aberto a novos projetos, colaborações e conversas. Prefira o WhatsApp para respostas mais rápidas.",
            en: "Open to new projects, collaborations and conversations. WhatsApp is the fastest way to reach me.",
        },
        form: {
            name: {pt: "Nome", en: "Name"},
            email: {pt: "Email", en: "Email"},
            message: {pt: "Mensagem", en: "Message"},
            send: {pt: "Enviar", en: "Send"},
            sending: {pt: "Enviando...", en: "Sending..."},
            sent: {pt: "Enviado!", en: "Sent!"},
            error: {pt: "Erro ao enviar", en: "Failed to send"},
        },
    },
    footer: {
        made: {pt: "Feito em Santa Catarina - Brasil.", en: "Made in Santa Catarina - Brazil."},
        rights: {pt: "Todos os direitos reservados.", en: "All rights reserved."},
    },
};
