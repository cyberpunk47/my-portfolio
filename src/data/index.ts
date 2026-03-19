import type { ComponentType } from "react";
import { FaBrain, FaJava } from "react-icons/fa6";
import { SiCplusplus, SiLaravel, SiMysql, SiPython } from "react-icons/si";

export type Skill = {
    icon: ComponentType<{ size?: number }>,
    name: string,
    desc: string,
    level: number,
}

export type Project = {
    tag: string,
    name: string,
    year: string,
    desc: string,
    highlights: string[],
    tech: string[],
    link: string,
    live?: string,
}

export type Certification = {
    name: string,
    issuer: string,
    date: string,
    credentialId?: string,
    skills?: string[],
    category: string,
}

export type Experience = {
    role: string,
    company: string,
    period: string,
    description: string,
    type: "internship" | "work" | "freelance",
}

export type ResearchItem = {
    title: string,
    authors: string[],
    supervisor: string,
    venue: string,
    year: string,
    status: "published" | "unpublished" | "under-review",
    abstract: string,
    keywords: string[],
}

export const skills: Skill[] = [
    {
        icon: SiCplusplus,
        name: "C++",
        desc: "STL, memory management, OOP. The weapon of choice for contests and clean logic.",
        level: 78,
    },
    {
        icon: FaBrain,
        name: "DSA & Algorithms",
        desc: "Graphs, DP, greedy, segment trees, two-pointer — the patterns that crack interviews.",
        level: 72,
    },
    {
        icon: SiPython,
        name: "Python",
        desc: "Scripting, OS-level tooling, PyQt5 GUI, pandas, matplotlib. Built production monitoring.",
        level: 65,
    },
    {
        icon: SiLaravel,
        name: "PHP & Laravel",
        desc: "Full-stack web apps, RESTful APIs, MVC, authentication systems, admin dashboards.",
        level: 68,
    },
    {
        icon: SiMysql,
        name: "MySQL",
        desc: "Schema design, complex queries, joins, indexing, normalization — the boring stuff that matters.",
        level: 65,
    },
    {
        icon: FaJava,
        name: "Java & Spring Boot",
        desc: "Building toward enterprise backend. Spring ecosystem, REST APIs, microservices.",
        level: 35,
    },
]

export const projects: Project[] = [
    {
        tag: "AI / Full-Stack",
        name: "Finanswer",
        year: "2025",
        desc: "AI finance chatbot that actually answers money questions. Powered by Vercel AI SDK, deployed live.",
        highlights: [
            "Integrated Vercel AI SDK for real-time financial Q&A with streaming responses",
            "Built end-to-end with Next.js, TypeScript, and Tailwind — deployed to production",
            "Handles natural language finance queries with context-aware follow-ups",
        ],
        tech: ["Next.js", "TypeScript", "Vercel AI SDK", "Tailwind CSS"],
        link: "https://github.com/cyberpunk47/finanswer",
        live: "https://finanswer.vercel.app",
    },
    {
        tag: "Systems / Security",
        name: "Security Logger",
        year: "2025",
        desc: "Real-time OS monitoring for Linux that speaks Windows Event Log format.",
        highlights: [
            "Built a PyQt5 GUI with live system event monitoring and SQLite persistence",
            "Runs as a systemd service — designed for actual production Linux servers",
            "Generates structured logs compatible with Windows Event Log for cross-platform analysis",
        ],
        tech: ["Python", "PyQt5", "SQLite", "systemd", "pandas"],
        link: "https://github.com/cyberpunk47/security-logger",
    },
    {
        tag: "Full-Stack / Java",
        name: "Hospital Management System",
        year: "2025",
        desc: "End-to-end HMS with patient records, appointments, and department modules.",
        highlights: [
            "Spring Boot backend with RESTful APIs for patient, doctor, and appointment management",
            "React frontend with role-based access control for admin, doctor, and receptionist views",
            "Modular architecture — departments, billing, and scheduling run as separate services",
        ],
        tech: ["Spring Boot", "React", "Java", "REST API"],
        link: "https://github.com/cyberpunk47/HMS",
    },
    {
        tag: "Backend / PHP",
        name: "Faculty Management System",
        year: "2025",
        desc: "Full faculty lifecycle — departments, evaluations, promotions, and reports.",
        highlights: [
            "Role-based authentication with admin panel for managing the entire faculty lifecycle",
            "Built evaluation and promotion tracking workflows from scratch",
            "Responsive Tailwind CSS frontend with server-side PHP rendering",
        ],
        tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
        link: "https://github.com/cyberpunk47/fms",
    },
    {
        tag: "Cloud / AWS",
        name: "AWS VPCore Infra",
        year: "2025",
        desc: "Scalable AWS architecture with VPC, EC2, and Application Load Balancer.",
        highlights: [
            "Designed a production-grade VPC with public/private subnets and security groups",
            "Deployed 3 EC2 instances behind an ALB with automated health checks",
            "NGINX reverse proxy with custom Bash scripts for deployment automation",
        ],
        tech: ["AWS VPC", "EC2", "ALB", "NGINX", "Bash"],
        link: "https://github.com/cyberpunk47/aws-VPCore-Infra",
    },
]

export const certifications: Certification[] = [
    {
        name: "Types of Conflict",
        issuer: "University of California, Irvine",
        date: "Mar 2026",
        credentialId: "RYWC6QHCNQUN",
        category: "Soft Skills",
    },
    {
        name: "Developing Front-End Apps with React",
        issuer: "IBM",
        date: "Oct 2025",
        credentialId: "D8XEU0AX5Y9U",
        category: "Web Development",
    },
    {
        name: "Computational Theory: Language Principle & Finite Automata Theory",
        issuer: "Skillsoft",
        date: "Aug 2025",
        credentialId: "157714700",
        category: "Computer Science Theory",
    },
    {
        name: "Digital Systems: From Logic Gates to Processors",
        issuer: "Universitat Autònoma de Barcelona",
        date: "Sep 2024",
        credentialId: "YZKQ3D1QSGGA",
        skills: ["Digital Electronics", "Logic Gates"],
        category: "Hardware & Electronics",
    },
    {
        name: "Introduction to Hardware and Operating Systems",
        issuer: "IBM",
        date: "Sep 2024",
        credentialId: "S2G5FA61O8HK",
        skills: ["Windows", "Operating Systems"],
        category: "Systems & OS",
    },
    {
        name: "Computer Communications Specialization",
        issuer: "University of Colorado System",
        date: "Dec 2024",
        credentialId: "C5LFFXOEHYRD",
        skills: ["Networking", "Network Design"],
        category: "Networking",
    },
    {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Sep 2023",
        skills: ["JavaScript", "HTML5", "CSS"],
        category: "Web Development",
    },
]

export const experiences: Experience[] = [
    {
        role: "Open to Internships",
        company: "Actively seeking opportunities",
        period: "Present",
        description: "Currently seeking backend/SDE internships where I can contribute real code, learn from senior engineers, and build production-grade systems.",
        type: "internship",
    },
]

export const research: ResearchItem[] = [
    {
        title: "Secure Agile CI/CD Pipeline using Blockchain Authentication",
        authors: ["Yasir Hameed"],
        supervisor: "Prof. Gaurav Sharma",
        venue: "Lovely Professional University — Research Paper",
        year: "2025",
        status: "unpublished",
        abstract: "Presents the Sprint-Aware Selective Ledger (SASL), a blockchain-assisted model for securing Agile CI/CD pipelines. SASL anchors only four lineage-defining events — commit creation, build generation, artifact storage, and deployment approval — achieving an approximate 80% reduction in latency and cost compared to full-chain approaches while preserving supply-chain integrity.",
        keywords: ["CI/CD Security", "Blockchain", "Agile DevOps", "Supply Chain", "Smart Contracts"],
    },
]

export const timeline = [
    { year: "2023", event: "Started B.Tech CS", detail: "Enrolled in Computer Science — the grind begins" },
    { year: "2024", event: "Competitive Programming", detail: "Started DSA seriously, built first real projects" },
    { year: "2025", event: "Full-Stack & AI", detail: "Shipped Finanswer live, built HMS with Spring Boot" },
    { year: "Feb 2026", event: "LeetCode & Codeforces", detail: "Started active contest grinding on CF & LC" },
    { year: "Now", event: "Targeting Backend SDE", detail: "Hunting internships, sharpening Java & system design" },
]

export const leetcodeStats = {
    solved: 152,
    easy: 55,
    medium: 89,
    hard: 8,
    acceptance: 78.4,
}

export const socialLinks = {
    github: "https://github.com/cyberpunk47",
    linkedin: "https://www.linkedin.com/in/yasirh47/",
    codeforces: "https://codeforces.com/profile/cyberpunk_47",
    leetcode: "https://leetcode.com/u/cyberpunk47/",
    email: "mailto:sniperking5681@gmail.com",
}