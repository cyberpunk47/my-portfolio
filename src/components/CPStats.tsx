import { motion } from "framer-motion"
import { SiCodeforces, SiLeetcode } from "react-icons/si"
import { leetcodeStats } from "../data"
import { useCodeForces } from "../hooks/useCodeforces"

export default function CPStats() {
  const { data, status } = useCodeForces("cyberpunk_47")

  return (
    <section
      id="stats"
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
            03 / Competitive Programming
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
            CP<br />Stats
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
          className="cp-grid"
        >

          {/* Codeforces Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: "var(--bg)", padding: "40px" }}
          >
            {/* CF Header */}
            <div className="flex items-center flex-wrap" style={{ gap: "12px", marginBottom: "32px" }}>
              <SiCodeforces size={24} style={{ color: "var(--accent)" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--text)",
                }}
              >
                Codeforces
              </span>
              <a
                href="https://codeforces.com/profile/cyberpunk_47"
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  marginLeft: "auto",
                  padding: "4px 10px",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
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
                @cyberpunk_47 ↗
              </a>
            </div>

            {/* CF Stats */}
            {status === "loading" && (
              <div className="flex flex-col" style={{ gap: "16px" }}>
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse" style={{ height: "48px", borderRadius: "4px", background: "var(--surface)" }} />
                ))}
              </div>
            )}

            {status === "error" && (
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "15px", color: "var(--muted)" }}>
                Could not load CF data. Check your connection.
              </p>
            )}

            {status === "success" && data && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1px",
                  background: "var(--border)",
                  border: "1px solid var(--border)",
                }}
              >
                {[
                  { label: "Current Rating", value: data.rating },
                  { label: "Max Rating", value: data.maxRating },
                  { label: "Current Rank", value: data.rank },
                  { label: "Best Rank", value: data.maxRank },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{ background: "var(--bg)", padding: "20px", transition: "background 0.2s" }}
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
                      className="capitalize"
                      style={{
                        fontFamily: typeof value === "number" ? "var(--font-display)" : "var(--font-mono)",
                        fontSize: typeof value === "number" ? "36px" : "14px",
                        color: "var(--accent)",
                        lineHeight: 1,
                        fontWeight: 700,
                      }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: "var(--bg)", padding: "40px" }}
          >
            {/* LC Header */}
            <div className="flex items-center flex-wrap" style={{ gap: "12px", marginBottom: "32px" }}>
              <SiLeetcode size={24} style={{ color: "var(--accent)" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--text)",
                }}
              >
                LeetCode
              </span>
              <a
                href="https://leetcode.com/u/cyberpunk47/"
                target="_blank"
                rel="noopener noreferrer"
                className="hoverable"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  marginLeft: "auto",
                  padding: "4px 10px",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
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
                @cyberpunk47 ↗
              </a>
            </div>

            {/* LC Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {[
                { label: "Total Solved", value: `${leetcodeStats.solved}/3874` },
                { label: "Acceptance", value: `${leetcodeStats.acceptance}%` },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{ background: "var(--bg)", padding: "20px", transition: "background 0.2s" }}
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
                      fontSize: "32px",
                      color: "var(--accent)",
                      lineHeight: 1,
                      fontWeight: 700,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Easy / Medium / Hard */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderTop: "none",
              }}
            >
              {[
                { label: "Easy", value: `${leetcodeStats.easy}/932`, color: "#22c55e" },
                { label: "Medium", value: `${leetcodeStats.medium}/2027`, color: "#f59e0b" },
                { label: "Hard", value: `${leetcodeStats.hard}/915`, color: "#ef4444" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  style={{ background: "var(--bg)", padding: "20px", transition: "background 0.2s" }}
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
                      color,
                      lineHeight: 1,
                      fontWeight: 700,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}