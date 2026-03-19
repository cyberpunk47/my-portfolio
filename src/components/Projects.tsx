import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "../data"

export default function Projects() {
  return (
    <section
      id="projects"
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
            02 / Work
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
            Selected<br />Projects
          </h2>
        </motion.div>

        {/* Projects List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hoverable"
              style={{
                background: "var(--bg)",
                padding: "40px 48px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: "40px",
                transition: "background 0.2s, padding-left 0.3s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--surface)"
                e.currentTarget.style.paddingLeft = "64px"
                const line = e.currentTarget.querySelector(".bottom-line") as HTMLElement
                if (line) line.style.transform = "scaleX(1)"
                const arrow = e.currentTarget.querySelector(".project-arrow") as HTMLElement
                if (arrow) {
                  arrow.style.color = "var(--accent)"
                  arrow.style.transform = "translate(4px, -4px)"
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--bg)"
                e.currentTarget.style.paddingLeft = "48px"
                const line = e.currentTarget.querySelector(".bottom-line") as HTMLElement
                if (line) line.style.transform = "scaleX(0)"
                const arrow = e.currentTarget.querySelector(".project-arrow") as HTMLElement
                if (arrow) {
                  arrow.style.color = "var(--muted)"
                  arrow.style.transform = "translate(0, 0)"
                }
              }}
            >
              {/* Bottom accent line */}
              <div
                className="bottom-line"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "var(--accent)",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease",
                  transformOrigin: "left",
                }}
              />

              <div>
                {/* Tag + Year */}
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
                      display: "inline-block",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      color: "var(--muted)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 48px)",
                    letterSpacing: "-0.5px",
                    marginBottom: "10px",
                    color: "var(--text)",
                  }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--muted)",
                    maxWidth: "560px",
                    lineHeight: 1.6,
                  }}
                >
                  {project.desc}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul style={{ margin: "14px 0 0 0", padding: 0, listStyle: "none", maxWidth: "560px" }}>
                    {project.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "13px",
                          color: "var(--muted)",
                          lineHeight: 1.6,
                          paddingLeft: "16px",
                          position: "relative",
                          marginBottom: "6px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "8px",
                            width: "6px",
                            height: "6px",
                            background: "var(--accent)",
                            borderRadius: "50%",
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech chips */}
                <div className="flex flex-wrap" style={{ gap: "8px", marginTop: "16px" }}>
                  {project.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        letterSpacing: "1px",
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                        padding: "4px 10px",
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col" style={{ gap: "12px" }}>
                <a
                  href={project.link}
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
                  onClick={e => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverable"
                    style={{
                      padding: "12px",
                      border: "1px solid var(--accent)",
                      color: "var(--accent)",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "var(--accent)"
                      e.currentTarget.style.color = "var(--bg)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "transparent"
                      e.currentTarget.style.color = "var(--accent)"
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}

                {/* Arrow */}
                <div
                  className="project-arrow"
                  style={{
                    fontSize: "28px",
                    color: "var(--muted)",
                    transition: "color 0.2s, transform 0.2s",
                    textAlign: "center",
                  }}
                >
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}