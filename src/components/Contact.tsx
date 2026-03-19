import { Github, Linkedin, Mail } from "lucide-react"
import { SiCodeforces, SiLeetcode } from "react-icons/si"
import { socialLinks } from "../data"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "120px clamp(16px, 6vw, 128px)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              08 / Contact
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 6vw, 80px)",
                lineHeight: 0.95,
                letterSpacing: "-1px",
                marginBottom: "32px",
                color: "var(--text)",
              }}
            >
              Let's<br />
              <span style={{ color: "var(--accent)" }}>Build</span><br />
              Together.
            </h2>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: "1px",
                border: "1px solid var(--border)",
                background: "var(--border)",
              }}
            >
              {[
                { icon: <Github size={18} />, href: socialLinks.github, label: "GitHub" },
                { icon: <Linkedin size={18} />, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: <SiCodeforces size={18} />, href: socialLinks.codeforces, label: "CF" },
                { icon: <SiLeetcode size={18} />, href: socialLinks.leetcode, label: "LC" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable"
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    padding: "16px 24px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    textDecoration: "none",
                    background: "var(--bg)",
                    transition: "background 0.2s, color 0.2s",
                    textAlign: "center",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--surface)"
                    e.currentTarget.style.color = "var(--accent)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "var(--bg)"
                    e.currentTarget.style.color = "var(--muted)"
                  }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            {[
              { label: "Email", value: "sniperking5681@gmail.com", href: socialLinks.email },
              { label: "Location", value: "India", href: null },
              { label: "Status", value: "Open to internships", href: null, highlight: true },
            ].map(({ label, value, href, highlight }) => (
              <div
                key={label}
                style={{
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "20px",
                  paddingTop: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "15px",
                    letterSpacing: "1px",
                    color: "var(--muted)",
                    lineHeight: 2,
                  }}
                >
                  {label} —{" "}
                  {href ? (
                    <a
                      href={href}
                      className="hoverable"
                      style={{
                        color: "var(--text)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--border)",
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "var(--accent)"
                        e.currentTarget.style.color = "var(--accent)"
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "var(--border)"
                        e.currentTarget.style.color = "var(--text)"
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: highlight ? "#22ff88" : "var(--text)" }}>
                      {value}
                    </span>
                  )}
                </p>
              </div>
            ))}

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "15px",
                letterSpacing: "1px",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginTop: "16px",
              }}
            >
              I'm looking for backend/SDE internships and open-source projects where I can contribute real code
              and learn from senior engineers. If you're building something interesting — let's talk.
            </p>

            <div style={{ marginTop: "24px" }}>
              <a className="btn-primary hoverable" href={socialLinks.email} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <Mail size={14} />
                Send Email →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}