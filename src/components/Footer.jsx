import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, Clock } from 'lucide-react'
import CrossStar from './CrossStar'

gsap.registerPlugin(ScrollTrigger)

/* fixed size override for PNG icons (global img rule sets width:100%) */
const ico = { width: '20px', height: '20px', objectFit: 'contain', flexShrink: 0, display: 'block' }

const navLinks = [
  { to: '/',           label: 'Home',       icon: '/icon-home.png' },
  { to: '/about',      label: 'About',      icon: '/icon-about.png' },
  { to: '/programmes', label: 'Programmes', icon: '/icon-programmes.png' },
  { to: '/contact',    label: 'Contact',    icon: '/icon-email.png' },
]

const quickLinks = [
  { to: '/academics',  label: 'Academics',  icon: '/icon-academics.png' },
  { to: '/admissions', label: 'Admissions', icon: '/icon-admissions.png' },
  { to: '/gallery',    label: 'Gallery',    icon: '/icon-gallery.png' },
]

export default function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true } }
    )
  }, [])

  return (
    <div className="footer-wrap">
      <footer ref={ref} className="footer" style={{ opacity: 0 }}>
        <div className="footer-top">

          {/* ── Brand + Newsletter ── */}
          <div>
            <Link to="/" className="nav-logo" style={{ color: 'var(--text)', marginBottom: 4, display: 'inline-flex' }}>
              <div className="nav-logo-mark">
                <CrossStar size={16} color="white" />
              </div>
              Bechem School For The Deaf and Blind
            </Link>
            <p className="footer-brand-text">
              Nurturing excellence in education and technical skills across Ghana.
            </p>
            <div className="newsletter-row">
              <input className="newsletter-input" type="email" placeholder="Email Address" />
              <button className="btn-dark">Sign Up</button>
            </div>
          </div>

          {/* ── Get In Touch ── */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Phone size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                <span className="fc-contact">0352 092009</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <img src="/icon-email.png" alt="" style={ico} />
                <span className="fc-contact">Bechemdeaf@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                <span className="fc-contact">P.O. Box 34, Bechem<br />Tano South District,<br />Brong Ahafo Region, Ghana</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Clock size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span className="fc-contact">Mon – Fri: 7:30 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(({ to, label, icon }) => (
                <li key={to} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img src={icon} alt="" style={ico} />
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(({ to, label, icon }) => (
                <li key={to} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img src={icon} alt="" style={ico} />
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Social ── */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '/icon-facebook.png',  label: 'Facebook' },
                { icon: '/icon-instagram.png', label: 'Instagram' },
                { icon: '/icon-linkedin.png',  label: 'LinkedIn' },
                { icon: '/icon-twitter.png',   label: 'Twitter' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img src={icon} alt={label} style={ico} />
                  <a href="#" className="fc-contact" style={{ transition: 'color 0.2s' }}>{label}</a>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 <strong>Bechem School For The Deaf and Blind</strong>. All rights reserved.</p>
          <div className="footer-social">
            {[
              { icon: '/icon-facebook.png',  title: 'Facebook' },
              { icon: '/icon-instagram.png', title: 'Instagram' },
              { icon: '/icon-linkedin.png',  title: 'LinkedIn' },
              { icon: '/icon-twitter.png',   title: 'Twitter' },
            ].map(({ icon, title }) => (
              <a key={title} href="#" aria-label={title} title={title}>
                <img src={icon} alt={title} style={ico} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
