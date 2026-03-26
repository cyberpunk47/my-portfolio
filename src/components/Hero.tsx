import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Download, User } from "lucide-react"
import { SiCodeforces, SiLeetcode } from "react-icons/si"
import { socialLinks } from "../data"
import { useCodeForces } from "../hooks/useCodeforces"

export default function Hero() {
    const { data, status } = useCodeForces("cyberpunk_47")

    return (
        <section
            className="min-h-screen flex flex-col justify-center relative overflow-hidden"
            style={{
                backgroundColor: "var(--bg)",
                padding: "0 clamp(16px, 6vw, 128px)",
                paddingTop: "120px",
            }}
        >
            {/* Background grid lines */}
            {[25, 50, 75].map(left => (
                <div
                    key={left}
                    className="absolute top-0 bottom-0 hidden md:block"
                    style={{ left: `${left}%`, width: "1px", background: "var(--border)" }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10" style={{ maxWidth: "1400px", width: "100%", margin: "0 auto" }}>

                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center" style={{ gap: "12px", marginBottom: "8px" }}>
                        <div style={{ width: "32px", height: "1px", background: "var(--accent)" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                textTransform: "uppercase",
                                color: "var(--muted)",
                            }}
                        >
                            Aspiring Software Development Engineer
                        </span>
                    </div>
                    <p
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                            color: "var(--muted)",
                            letterSpacing: "1px",
                            marginLeft: "44px",
                        }}
                    >
                        B.Tech CS · Lovely Professional University, India
                    </p>
                </motion.div>

                {/* Name + Photo row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex items-end justify-between flex-wrap"
                    style={{ marginTop: "24px", gap: "24px" }}
                >
                    {/* Name */}
                    <h1
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(56px, 11vw, 180px)",
                            lineHeight: 0.9,
                            letterSpacing: "-2px",
                            color: "var(--text)",
                        }}
                    >
                        <span className="glitch-text" data-text="YASIR">YASIR</span>
                        <br />
                        <span className="glitch-text" data-text="HAMEED" style={{ color: "var(--accent)" }}>HAMEED</span>
                    </h1>

                    {/* Photo — right of name, medium size */}
                    <div
                        style={{
                            width: "clamp(160px, 15vw, 200px)",
                            height: "clamp(192px, 18vw, 240px)",
                            border: "2px solid var(--accent)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            overflow: "hidden",
                            background: "var(--surface)",
                        }}
                    >
                    <img src="/picture.jpeg" alt="Yasir Hameed" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </motion.div>

                {/* Pitch — no fluff, just facts */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "clamp(13px, 1.4vw, 16px)",
                        color: "var(--muted)",
                        marginTop: "32px",
                        maxWidth: "560px",
                        lineHeight: 1.8,
                    }}
                >
                    Second-year CS student with{" "}
                    <span style={{ color: "var(--text)" }}>152+ problems solved</span> on LeetCode,{" "}
                    <span style={{ color: "var(--text)" }}>5 projects</span> across full-stack, cloud,
                    and systems, and a{" "}
                    <span style={{ color: "var(--text)" }}>research paper on blockchain-secured CI/CD</span>.
                    Looking for a backend / SDE internship where I can write real code from day one.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center"
                    style={{ gap: "16px", marginTop: "48px" }}
                >
                    <a className="btn-primary hoverable" href="#projects">View Work</a>
                    <a className="btn-ghost hoverable" href="#contact">Get In Touch</a>
                    <a
                        className="btn-ghost hoverable flex items-center"
                        href="/resume.pdf"
                        download
                        style={{ gap: "8px" }}
                    >
                        <Download size={14} />
                        <a href="./resume.pdf">Resume</a>
                    </a>
                </motion.div>

                {/* Stats counter row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap"
                    style={{
                        marginTop: "64px",
                        gap: "40px",
                    }}
                >
                    {[
                        {
                            num: status === "success" && data ? String(data.rating) : "—",
                            label: "CF Rating",
                        },
                        { num: "152+", label: "Problems Solved" },
                        { num: "5", label: "Projects Built" },
                        { num: "2+", label: "Contests / Month" },
                    ].map(({ num, label }) => (
                        <div key={label}>
                            <div
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontSize: "40px",
                                    color: "var(--accent)",
                                    lineHeight: 1,
                                }}
                            >
                                {num}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "12px",
                                    letterSpacing: "2px",
                                    color: "var(--muted)",
                                    textTransform: "uppercase",
                                    marginTop: "4px",
                                }}
                            >
                                {label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center flex-wrap"
                    style={{ gap: "12px", marginTop: "40px" }}
                >
                    {[
                        { icon: <Github size={18} />, href: socialLinks.github },
                        { icon: <Linkedin size={18} />, href: socialLinks.linkedin },
                        { icon: <SiCodeforces size={18} />, href: socialLinks.codeforces },
                        { icon: <SiLeetcode size={18} />, href: socialLinks.leetcode },
                    ].map(({ icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hoverable"
                            style={{
                                padding: "12px",
                                border: "1px solid var(--border)",
                                color: "var(--muted)",
                                transition: "color 0.2s, border-color 0.2s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = "var(--accent)"
                                e.currentTarget.style.borderColor = "var(--accent)"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = "var(--muted)"
                                e.currentTarget.style.borderColor = "var(--border)"
                            }}
                        >
                            {icon}
                        </a>
                    ))}

                    {/* Finanswer live link */}
                    <a
                        href="https://finanswer.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost hoverable flex items-center"
                        style={{ padding: "10px 20px", gap: "8px" }}
                    >
                        <ExternalLink size={14} />
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", letterSpacing: "1px" }}>
                            Finanswer Live
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute hidden md:flex flex-col items-center"
                style={{
                    bottom: "40px",
                    right: "clamp(16px, 6vw, 128px)",
                    color: "var(--muted)",
                    gap: "12px",
                }}
            >
                <span
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        letterSpacing: "3px",
                        writingMode: "vertical-rl",
                        textTransform: "uppercase",
                    }}
                >
                    Scroll
                </span>
                <div
                    style={{
                        width: "1px",
                        height: "48px",
                        background: "var(--muted)",
                        animation: "scrollLine 2s ease infinite",
                    }}
                />
            </div>
        </section>
    )
}