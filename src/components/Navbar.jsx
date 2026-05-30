import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { X } from 'lucide-react'
import CrossStar from './CrossStar'

const links = [
  { to: '/',            label: 'Home',       icon: '/icon-home.png' },
  { to: '/about',       label: 'About Us',   icon: '/icon-about.png' },
  { to: '/academics',   label: 'Academics',  icon: '/icon-academics.png' },
  { to: '/programmes',  label: 'What We Offer', icon: '/icon-programmes.png' },
  { to: '/admissions',  label: 'Admissions', icon: '/icon-admissions.png' },
  { to: '/gallery',     label: 'Documentaries', icon: '/icon-gallery.png' },
  { to: '/contact',     label: 'Contact',    icon: '/icon-email.png' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0.6 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav ref={navRef} className={`nav${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="nav-logo-mark">
            <CrossStar size={30} />
          </div>
          <span className="nav-logo-text">
            <span>Bechem School</span>
            <span>For The Deaf and Blind</span>
          </span>
        </Link>

        {/* Links */}
        <ul className="nav-links">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <Link to={to} className={pathname === to ? 'active' : ''}>
                <img src={icon} alt="" width={18} height={18} className="nav-link-icon" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/admissions" className="nav-apply">Apply Now</Link>

        {/* Burger */}
        <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mobile-menu-head">
          <Link to="/" className="nav-logo" style={{ color: 'var(--text)' }}>
            <div className="nav-logo-mark">
              <CrossStar size={30} />
            </div>
            <span className="nav-logo-text">
              <span>Bechem School</span>
              <span>For The Deaf and Blind</span>
            </span>
          </Link>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-links">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <Link to={to}>
                <img src={icon} alt="" width={30} height={30} className="nav-link-icon" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <Link to="/admissions" className="btn-yellow">
            Apply Now <CrossStar size={18} />
          </Link>
        </div>
      </div>
    </>
  )
}
