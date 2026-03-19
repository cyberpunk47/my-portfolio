import { motion } from "framer-motion"
import { skills } from "../data"

export default function Skills() {
  return (
    <section
      id="skills"
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
            01 / Skills
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
            What I<br />Work With
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="hoverable"
                style={{
                  background: "var(--bg)",
                  padding: "32px",
                  transition: "background 0.2s",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--surface)"
                  const bar = e.currentTarget.querySelector(".accent-bar") as HTMLElement
                  if (bar) bar.style.height = "100%"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--bg)"
                  const bar = e.currentTarget.querySelector(".accent-bar") as HTMLElement
                  if (bar) bar.style.height = "0%"
                }}
              >
                {/* Left accent bar */}
                <div
                  className="accent-bar"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "0%",
                    background: "var(--accent)",
                    transition: "height 0.3s ease",
                  }}
                />

                {/* Icon */}
                <div style={{ color: "var(--accent)", marginBottom: "16px" }}>
                  <Icon size={28} />
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "16px",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "var(--text)",
                  }}
                >
                  {skill.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {skill.desc}
                </p>

                {/* Skill level bar */}
                <div className="skill-level-bar">
                  <div className="skill-level-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}