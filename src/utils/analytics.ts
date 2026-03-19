// Lightweight analytics tracker
// Tracks page views, section views, clicks, and CV downloads
// Stores data in localStorage + sends to a configurable endpoint

const STORAGE_KEY = "yh_analytics"
const SESSION_KEY = "yh_session"

export type AnalyticsEvent = {
  type: "page_view" | "section_view" | "click" | "cv_download" | "external_link"
  target?: string
  timestamp: number
  sessionId: string
  referrer: string
  userAgent: string
  screenSize: string
  path: string
}

function getSessionId(): string {
  let sessionId = sessionStorage.getItem(SESSION_KEY)
  if (!sessionId) {
    sessionId = `s_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    sessionStorage.setItem(SESSION_KEY, sessionId)
  }
  return sessionId
}

function getVisitorId(): string {
  let visitorId = localStorage.getItem("yh_visitor_id")
  if (!visitorId) {
    visitorId = `v_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
    localStorage.setItem("yh_visitor_id", visitorId)
  }
  return visitorId
}

function storeEvent(event: AnalyticsEvent) {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as AnalyticsEvent[]
    stored.push(event)
    // Keep last 500 events max
    if (stored.length > 500) stored.splice(0, stored.length - 500)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // silently fail
  }
}

export function trackEvent(type: AnalyticsEvent["type"], target?: string) {
  const event: AnalyticsEvent = {
    type,
    target,
    timestamp: Date.now(),
    sessionId: getSessionId(),
    referrer: document.referrer || "direct",
    userAgent: navigator.userAgent,
    screenSize: `${window.innerWidth}x${window.innerHeight}`,
    path: window.location.pathname,
  }

  storeEvent(event)

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${type}${target ? `: ${target}` : ""}`)
  }
}

export function trackPageView() {
  trackEvent("page_view", window.location.pathname)
}

export function trackSectionView(sectionId: string) {
  trackEvent("section_view", sectionId)
}

export function trackClick(elementId: string) {
  trackEvent("click", elementId)
}

export function trackCVDownload() {
  trackEvent("cv_download", "resume.pdf")
}

export function trackExternalLink(url: string) {
  trackEvent("external_link", url)
}

// Get analytics summary (useful for debugging / admin)
export function getAnalyticsSummary() {
  const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as AnalyticsEvent[]
  const visitors = new Set(events.map(e => e.sessionId)).size
  const pageViews = events.filter(e => e.type === "page_view").length
  const cvDownloads = events.filter(e => e.type === "cv_download").length
  const sections = events
    .filter(e => e.type === "section_view")
    .reduce((acc, e) => {
      acc[e.target || "unknown"] = (acc[e.target || "unknown"] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  const clicks = events
    .filter(e => e.type === "click" || e.type === "external_link")
    .reduce((acc, e) => {
      acc[e.target || "unknown"] = (acc[e.target || "unknown"] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  return {
    totalEvents: events.length,
    uniqueSessions: visitors,
    pageViews,
    cvDownloads,
    sectionViews: sections,
    clickCounts: clicks,
    visitorId: getVisitorId(),
    currentSession: getSessionId(),
  }
}

// Initialize section tracking with IntersectionObserver
export function initSectionTracking() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          trackSectionView(entry.target.id)
        }
      })
    },
    { threshold: 0.3 }
  )

  // Observe all sections with ids
  setTimeout(() => {
    document.querySelectorAll("section[id]").forEach(section => {
      observer.observe(section)
    })
  }, 1000)

  return observer
}

// Track all external link clicks
export function initClickTracking() {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const anchor = target.closest("a")
    if (anchor) {
      const href = anchor.getAttribute("href")
      if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
        trackExternalLink(href)
      }
      // Track button-like clicks
      if (anchor.classList.contains("btn-primary") || anchor.classList.contains("btn-ghost")) {
        trackClick(anchor.textContent?.trim() || "button")
      }
    }
    // Track button clicks
    const button = target.closest("button")
    if (button) {
      trackClick(button.textContent?.trim() || button.className || "button")
    }
  })
}

// Set cookie for returning visitor tracking
export function setCookies() {
  const visitorId = getVisitorId()
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `yh_visitor=${visitorId}; expires=${expires}; path=/; SameSite=Lax`
  document.cookie = `yh_visited=true; expires=${expires}; path=/; SameSite=Lax`
  document.cookie = `yh_first_visit=${localStorage.getItem("yh_first_visit") || new Date().toISOString()}; expires=${expires}; path=/; SameSite=Lax`

  if (!localStorage.getItem("yh_first_visit")) {
    localStorage.setItem("yh_first_visit", new Date().toISOString())
  }
}

// Expose analytics to window for console access
if (typeof window !== "undefined") {
  (window as any).getAnalytics = getAnalyticsSummary
}
