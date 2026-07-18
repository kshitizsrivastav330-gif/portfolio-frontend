import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql,
    SiJavascript,
    SiTailwindcss,
    SiPostman,
    SiGithub,
    SiRender,
    SiVercel,
} from "react-icons/si";

const skills = [
    {
        category: "Backend",
        items: [
            {
                name: "Java",
                icon: FaJava,
                color: "java",
            },
            {
                name: "Spring Boot",
                icon: SiSpringboot,
                color: "spring",
            },
            {
                name: "Spring Security",
                icon: SiSpringboot,
                color: "spring",
            },
            {
                name: "REST API",
                icon: SiSpringboot,
                color: "spring",
            },
            {
                name: "JWT",
                icon: SiSpringboot,
                color: "spring",
            },
        ],
    },

    {
        category: "Frontend",
        items: [
            {
                name: "React",
                icon: FaReact,
                color: "react",
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
                color: "javascript",
            },
            {
                name: "HTML5",
                icon: FaHtml5,
                color: "html",
            },
            {
                name: "CSS3",
                icon: FaCss3Alt,
                color: "css",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "tailwind",
            },
        ],
    },

    {
        category: "Database",
        items: [
            {
                name: "MySQL",
                icon: SiMysql,
                color: "mysql",
            },
        ],
    },

    {
        category: "Tools",
        items: [
            {
                name: "Git",
                icon: FaGitAlt,
                color: "git",
            },
            {
                name: "GitHub",
                icon: SiGithub,
                color: "github",
            },
            {
                name: "Postman",
                icon: SiPostman,
                color: "postman",
            },
            {
                name: "Render",
                icon: SiRender,
                color: "render",
            },
            {
                name: "Vercel",
                icon: SiVercel,
                color: "vercel",
            },
        ],
    },
];

export default skills;