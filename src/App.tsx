import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CPStats from "./components/CPStats"
import Certifications from "./components/Certifications"
import Research from "./components/Research"
import About from "./components/About"
import Contact from "./components/Contact"

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  // Custom cursor state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const ringPos = useRef({ x: -100, y: -100 })
  const ringSmooth = useRef({ x: -100, y: -100 })
  const ringRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      ringPos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMove)

    const animateRing = () => {
      ringSmooth.current = {
        x: ringSmooth.current.x + (ringPos.current.x - ringSmooth.current.x) * 0.12,
        y: ringSmooth.current.y + (ringPos.current.y - ringSmooth.current.y) * 0.12,
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringSmooth.current.x}px`
        ringRef.current.style.top = `${ringSmooth.current.y}px`
      }
      rafRef.current = requestAnimationFrame(animateRing)
    }
    rafRef.current = requestAnimationFrame(animateRing)

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(target.matches("a, button, .hoverable"))
    }
    window.addEventListener("mouseover", handleHover)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseover", handleHover)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <div
        className={`cursor-dot ${hovering ? "hovering" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? "hovering" : ""}`}
        style={{ left: -100, top: -100 }}
      />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <Hero />
      <Skills />
      <Projects />
      <CPStats />
      <Certifications />
      <Research />
      <About />
      <Contact />

      {/* Footer */}
      <footer
        className="flex justify-between items-center flex-wrap"
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px clamp(16px, 6vw, 128px)",
          maxWidth: "1400px",
          margin: "0 auto",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "2px",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          © 2025 <span style={{ color: "var(--accent)" }}>Yasir Hameed</span>
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "2px",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          Built with C++ thinking & React hands
        </p>
      </footer>
    </div>
  )
}