import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { experiences } from "../data"

export default function Experience() {
  return (
    <section
      id="experience"
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
            05 / Experience
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
            Internships<br />& Work
          </h2>
        </motion.div>

        {/* Experience List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "var(--bg)",
                padding: "40px clamp(20px, 4vw, 48px)",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "24px",
                alignItems: "start",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--surface)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)" }}
            >
              {/* Icon */}
              <div
                style={{
                  padding: "12px",
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "4px",
                }}
              >
                <Briefcase size={24} />
              </div>

              {/* Content */}
              <div>
                {/* Type badge + period */}
                <div className="flex items-center flex-wrap" style={{ gap: "10px", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      border: "1px solid var(--accent)",
                      padding: "3px 8px",
                    }}
                  >
                    {exp.type}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      color: "var(--muted)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Role */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 3vw, 36px)",
                    letterSpacing: "-0.5px",
                    marginBottom: "4px",
                    color: "var(--text)",
                  }}
                >
                  {exp.role}
                </h3>

                {/* Company */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "15px",
                    color: "var(--accent)",
                    marginBottom: "12px",
                  }}
                >
                  {exp.company}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    maxWidth: "600px",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
