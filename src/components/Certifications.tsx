import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { certifications } from "../data"

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            04 / Certifications
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
            Courses &<br />Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                background: "var(--bg)",
                padding: "32px",
                transition: "background 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--surface)"
                const bar = e.currentTarget.querySelector(".cert-bar") as HTMLElement
                if (bar) bar.style.height = "100%"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--bg)"
                const bar = e.currentTarget.querySelector(".cert-bar") as HTMLElement
                if (bar) bar.style.height = "0%"
              }}
            >
              {/* Left accent bar */}
              <div
                className="cert-bar"
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

              {/* Category tag */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "2px 8px",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                {cert.category}
              </span>

              {/* Icon */}
              <div style={{ color: "var(--accent)", marginBottom: "12px" }}>
                <Award size={22} />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  color: "var(--text)",
                  lineHeight: 1.4,
                }}
              >
                {cert.name}
              </h3>

              {/* Issuer */}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "4px",
                }}
              >
                {cert.issuer}
              </p>

              {/* Date */}
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                Issued {cert.date}
              </p>

              {/* Credential ID */}
              {cert.credentialId && (
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  ID: {cert.credentialId}
                </p>
              )}

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap" style={{ gap: "6px", marginTop: "8px" }}>
                  {cert.skills.map(s => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "1px",
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                        padding: "2px 6px",
                        textTransform: "uppercase",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
