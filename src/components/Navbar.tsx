import { useEffect, useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

type NavbarProps = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const navLinks = ["Skills", "Projects", "Stats", "Certifications", "Experience", "Research", "About", "Contact"]

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
      style={{
        padding: "20px clamp(32px, 6vw, 128px)",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "border-color 0.3s, background 0.3s, backdrop-filter 0.3s",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="hoverable"
        style={{
          width: "12px",
          height: "12px",
          background: "var(--accent)",
          display: "block",
          flexShrink: 0,
          textDecoration: "none",
        }}
      />

      {/* Desktop Links */}
      <ul className="hidden md:flex" style={{ gap: "36px", listStyle: "none" }}>
        {navLinks.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center" style={{ gap: "16px" }}>

        {/* Status indicator */}
        <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#22ff88",
              display: "inline-block",
              animation: "statusPulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "1px",
              color: "var(--muted)",
              textTransform: "uppercase",
            }}
          >
            Open to Work
          </span>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="hoverable"
          style={{
            padding: "8px",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            background: "none",
            cursor: "pointer",
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
          {darkMode ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ color: "var(--muted)", background: "none", border: "none", cursor: "pointer" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col md:hidden"
          style={{
            padding: "16px clamp(32px, 6vw, 128px)",
            gap: "16px",
            background: "var(--nav-bg)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)" }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}