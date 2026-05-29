import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle } from 'lucide-react'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)
const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

const reqs = ['Completed Application Form', 'Birth Certificate (original + photocopy)', 'Previous School Report Card', 'Two (2) Passport-size Photographs']
const steps = [
  { title: 'Pick Up / Download Form', desc: 'Collect the application form at the school office or download it from this page.' },
  { title: 'Submit with Documents', desc: 'Return the completed form with all required supporting documents.' },
  { title: 'Entrance Screening', desc: 'Attend the entrance assessment or interview where applicable.' },
  { title: 'Receive Admission Letter', desc: 'Successful applicants will receive an official admission letter.' },
  { title: 'Report on Resumption Day', desc: 'Report on the official resumption date as indicated in your admission letter.' },
]

export default function Admissions() {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current?.querySelectorAll('.step') || [], { opacity: 0, x: -28 }, {
      opacity: 1, x: 0, duration: 0.65, ease: 'power2.out', stagger: 0.13,
      scrollTrigger: { trigger: '.step-list', start: 'top 76%', once: true }
    })
  }, [])

  return (
    <>
      <section className="page-hero">
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={13} color="var(--accent)" /> Admissions
        </span>
        <h1>Join Bechem School For The Deaf and Blind</h1>
        <p>We welcome children from KG through Basic 9. Find out who can apply, what you need, and how the process works.</p>
      </section>

      <section ref={ref} className="inner-sec">
        {/* Who can apply */}
        <div style={{ background: 'var(--card)', borderRadius: 20, padding: '32px 36px', maxWidth: 640, marginBottom: 72 }}>
          <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
            <CrossStar size={12} /> Who Can Apply
          </span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['Children of school-going age for Primary School (KG – Basic 6)', 'Prospective JHS students (Basic 7 – Basic 9)'].map(item => (
              <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.9rem' }}>
                <CheckCircle size={17} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="adm-grid">
          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Step 1 — What You Need
            </span>
            <h2 style={{ marginBottom: 14 }}>Admission Requirements</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem' }}>Please ensure you have all the following documents before submitting your application.</p>
            <ul className="req-list">
              {reqs.map((r, i) => (
                <li key={r}><span className="req-num">{i + 1}</span>{r}</li>
              ))}
            </ul>
            <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid var(--border)' }}>
              <span className="s-label" style={{ marginBottom: 10, display: 'flex' }}>
                <CrossStar size={12} /> Academic Calendar
              </span>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>Three academic terms per year, following the Ghana Education Service (GES) calendar.</p>
            </div>
          </div>

          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Step-by-Step Process
            </span>
            <h2 style={{ marginBottom: 14 }}>How to Apply</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem' }}>Follow these five steps to secure your child's place at Bechem School For The Deaf and Blind.</p>
            <div className="step-list">
              {steps.map(({ title, desc }, i) => (
                <div key={title} className="step">
                  <div className="step-dot">{i + 1}</div>
                  <div className="step-text"><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 380, borderRadius: 20, overflow: 'hidden', marginTop: 72 }}>
          <img src={img('admissions-view', 1400, 440)} alt="Bechem School For The Deaf and Blind campus" />
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-bg"><img src={img('adm-cta-b', 1920, 700)} alt="Apply now" /></div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Ready to Apply? We'd Love to Meet You.</h2>
          <p>Visit the school office or contact us to begin the admission process today.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-yellow">Contact Us <CrossStar size={13} /></Link>
            <Link to="/contact" className="btn-outline-white">Call the Office <CrossStar size={13} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
