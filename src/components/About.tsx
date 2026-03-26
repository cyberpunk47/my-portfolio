import { motion } from "framer-motion"
import { timeline } from "../data"

export default function About() {
    return (
        <section
            id="about"
            style={{
                borderTop: "1px solid var(--border)",
                padding: "120px clamp(16px, 6vw, 128px)",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "80px" }}
                >
                    <p
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            letterSpacing: "2px",
                            color: "var(--muted)",
                            textTransform: "uppercase",
                            marginBottom: "12px",
                        }}
                    >
                        07 / About
                    </p>
                    <h2
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(48px, 6vw, 96px)",
                            lineHeight: 0.9,
                            letterSpacing: "-1px",
                            color: "var(--text)",
                        }}
                    >
                        The<br />Person
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                    >
                        <p style={{ fontSize: "19px", lineHeight: 1.8, color: "var(--muted)" }}>
                            Hey, I'm <strong style={{ color: "var(--text)" }}>Yasir Hameed</strong> — a second-year CS
                            undergrad who'd rather <strong style={{ color: "var(--text)" }}>build a system from scratch</strong> than
                            follow a tutorial. I think in <strong style={{ color: "var(--text)" }}>algorithms</strong>, dream
                            in <strong style={{ color: "var(--text)" }}>architecture diagrams</strong>, and ship code that
                            actually runs in production.
                        </p>
                        <p style={{ fontSize: "19px", lineHeight: 1.8, color: "var(--muted)" }}>
                            My arena? <strong style={{ color: "var(--text)" }}>Codeforces and LeetCode</strong> — not for
                            the ratings, but because every hard problem I crack makes me a sharper engineer.
                            150+ problems solved, and counting. My weapon of choice
                            is <strong style={{ color: "var(--text)" }}>C++</strong>, but I've shipped real-world apps
                            with <strong style={{ color: "var(--text)" }}>Python, PHP, Laravel, React, and Spring Boot</strong>.
                        </p>
                        <p style={{ fontSize: "19px", lineHeight: 1.8, color: "var(--muted)" }}>
                            I don't chase buzzwords — I chase <strong style={{ color: "var(--text)" }}>depth</strong>. Every
                            project I touch goes from idea to deployment. Whether it's an{" "}
                            <strong style={{ color: "var(--text)" }}>AI chatbot handling finance queries</strong>, a{" "}
                            <strong style={{ color: "var(--text)" }}>real-time security logger for Linux</strong>, or a{" "}
                            <strong style={{ color: "var(--text)" }}>cloud infrastructure on AWS</strong> — I build things
                            that work at scale, not just in a sandbox.
                        </p>

                        {/* Info grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1px",
                                border: "1px solid var(--border)",
                                background: "var(--border)",
                                marginTop: "16px",
                            }}
                        >
                            {[
                                { label: "Degree", value: "B.Tech CS" },
                                { label: "University", value: "LPU, India" },
                                { label: "Focus", value: "Backend / SDE" },
                                { label: "Goal", value: "Game Developer" },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    style={{ background: "var(--bg)", padding: "28px", transition: "background 0.2s" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "var(--surface)" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)" }}
                                >
                                    <p
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "13px",
                                            letterSpacing: "2px",
                                            textTransform: "uppercase",
                                            color: "var(--muted)",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        {label}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-display)",
                                            fontSize: "28px",
                                            color: "var(--accent)",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            borderLeft: "1px solid var(--border)",
                        }}
                    >
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{
                                    display: "flex",
                                    gap: "24px",
                                    padding: "28px 32px",
                                    borderBottom: i !== timeline.length - 1 ? "1px solid var(--border)" : "none",
                                    position: "relative",
                                }}
                            >
                                {/* Dot on the left rail */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: "50%",
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "50%",
                                        transform: "translate(-50%, -50%)",
                                        background: item.year === "Now" ? "var(--accent)" : "var(--border)",
                                        border: "1px solid var(--accent)",
                                    }}
                                />

                                {/* Year */}
                                <span
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "15px",
                                        letterSpacing: "2px",
                                        flexShrink: 0,
                                        width: "72px",
                                        paddingTop: "2px",
                                        color: item.year === "Now" ? "var(--accent)" : "var(--muted)",
                                    }}
                                >
                                    {item.year}
                                </span>

                                {/* Content */}
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "17px",
                                            fontWeight: 700,
                                            marginBottom: "4px",
                                            color: "var(--text)",
                                        }}
                                    >
                                        {item.event}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "15px",
                                            lineHeight: 1.6,
                                            color: "var(--muted)",
                                        }}
                                    >
                                        {item.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
                }
            `}</style>
        </section>
    )
}
