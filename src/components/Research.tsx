import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { research } from "../data"

export default function Research() {
  return (
    <section
      id="research"
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
            06 / Research
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
            Research<br />& Patents
          </h2>
        </motion.div>

        {/* Research Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {research.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "var(--bg)",
                padding: "40px clamp(20px, 4vw, 48px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--surface)" }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)" }}
            >
              {/* Status + Year */}
              <div className="flex items-center flex-wrap" style={{ gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: item.status === "published" ? "#22c55e" : "var(--accent)",
                    border: `1px solid ${item.status === "published" ? "#22c55e" : "var(--accent)"}`,
                    padding: "3px 8px",
                  }}
                >
                  {item.status === "published" ? "Published" : item.status === "under-review" ? "Under Review" : "Unpublished"}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    color: "var(--muted)",
                  }}
                >
                  {item.year}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start" style={{ gap: "16px", marginBottom: "12px" }}>
                <div style={{ color: "var(--accent)", flexShrink: 0, marginTop: "4px" }}>
                  <FileText size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 3vw, 40px)",
                    letterSpacing: "-0.5px",
                    color: "var(--text)",
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Authors */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--muted)",
                  marginBottom: "4px",
                  paddingLeft: "40px",
                }}
              >
                Author: {item.authors.join(", ")}
              </p>

              {/* Supervisor */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--text)",
                  marginBottom: "16px",
                  paddingLeft: "40px",
                }}
              >
                Supervisor: <span style={{ color: "var(--accent)" }}>{item.supervisor}</span>
              </p>

              {/* Venue */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginBottom: "16px",
                  paddingLeft: "40px",
                  letterSpacing: "1px",
                }}
              >
                {item.venue}
              </p>

              {/* Abstract */}
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: "700px",
                  paddingLeft: "40px",
                  marginBottom: "16px",
                }}
              >
                {item.abstract}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap" style={{ gap: "8px", paddingLeft: "40px" }}>
                {item.keywords.map(kw => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "1px",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                      padding: "3px 10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
