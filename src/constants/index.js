import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    } from "../assets";

    export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    ];

    const services = [
    {
        title: "Full-Stack Web Development",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Researcher",
        icon: creator,
    },
    ];

    const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
    ];

    const experiences = [
    {
        title: "Lead Developer",
        company_name: "Smartan House",
        icon: starbucks,
        iconBg: "#383E56",
        date: "2024 – Present",
        points: [
        "As the core developer for Smartan House, I’ve led the development of a dynamic, scalable website that showcases our mission to ignite a new generation of integrity-driven youth leaders across Nigeria.",
        "From concept to deployment, I’ve built responsive, secure, and engaging web solutions that reflect the bold vision of Smartan House.",
        "My responsibilities include front-end design, backend development, performance optimization, and integrating interactive features to highlight our summits, programs, and initiatives.",
        "This role has sharpened my skills in managing real-world digital projects and aligning technical work with a powerful social mission.",
        ],
    }
    ];

    const testimonials = [
    {
        testimonial:
        "Davestein is exceptional — his thinking is wider than anything we imagined.",
        name: "SmartanDad",
        designation: "Founder",
        company: "Smartan House",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
        "Working with David feels like working with a genius in motion. He understands ideas before we finish speaking them.",
        name: "Temitope Abere",
        designation: "Executive Director",
        company: "Smartan House",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
        "He doesn’t just code — he creates systems that reflect clarity, purpose, and imagination",
        name: "Toluwalope",
        designation: "Creative Director",
        company: "Smartan House",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    ];

    const projects = [
    {
        name: "Car Rent",
        description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "mongodb",
            color: "green-text-gradient",
        },
        {
            name: "tailwind",
            color: "pink-text-gradient",
        },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "restapi",
            color: "green-text-gradient",
        },
        {
            name: "scss",
            color: "pink-text-gradient",
        },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
        {
            name: "nextjs",
            color: "blue-text-gradient",
        },
        {
            name: "supabase",
            color: "green-text-gradient",
        },
        {
            name: "css",
            color: "pink-text-gradient",
        },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };