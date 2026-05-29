import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from './CrossStar'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true }
      }
    )
  }, [])

  return (
    <div className="footer-wrap">
      <footer ref={ref} className="footer" style={{ opacity: 0 }}>
        <div className="footer-top">
          {/* Brand + Newsletter */}
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

          {/* Get In Touch */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <p className="fc-contact">+233 (0) 20 000 0000<br />info@sankofaacademy.edu.gh</p>
          </div>

          {/* Office */}
          <div className="footer-col">
            <h4>Office</h4>
            <p className="fc-contact">Ghana<br />Add your district & town here</p>
            <ul style={{ marginTop: 14 }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
                { to: '/programmes', label: 'Programmes' },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                { to: '/academics', label: 'Academics' },
                { to: '/admissions', label: 'Admissions' },
                { to: '/gallery', label: 'Gallery' },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="footer-col">
            <h4>We Are Open</h4>
            <p className="fc-contact">Mon – Fri: 7:30 AM – 4:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 <strong>Bechem School For The Deaf and Blind</strong>. All rights reserved.</p>
          <div className="footer-social">
            {[
              { label: 'f', title: 'Facebook' },
              { label: 'ig', title: 'Instagram' },
              { label: 'in', title: 'Pinterest' },
              { label: 'x', title: 'X' },
            ].map(({ label, title }) => (
              <a key={label} href="#" aria-label={title} title={title}>{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
