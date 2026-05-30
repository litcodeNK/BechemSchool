import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from '../components/CrossStar'
import YoutubeBg from '../components/YoutubeBg'

gsap.registerPlugin(ScrollTrigger)

const progs = [
  { emoji: '🏗️', title: 'Building & Construction Technology', desc: 'A three-year programme covering bricklaying, masonry, roofing, and basic structural principles. Students gain hands-on construction experience alongside theory and technical drawing, preparing them for Ghana\'s growing building industry.', img: '/construction-1.webp' },
  { emoji: '🪵', title: 'Carpentry & Joinery', desc: 'Three years of practical woodworking — producing classroom furniture, joints, and roofing structures using teak, mahogany, and cedar. Workshop training is paired with theory, trade science, and geometrical drawing. Graduates sit the NVTI proficiency test and receive a starter kit of professional tools.', img: '/wood-3.webp' },
  { emoji: '👗', title: 'Fashion Designing', desc: 'A creative three-year programme covering bead work, batik, tye-and-dye, millinery, layette, and career-oriented design courses. Students also study ICT, mathematics, and entrepreneurship. Graduates earn an NVTI certificate and receive a set of professional fashion tools from a partner NGO.', img: '/fashion-2.webp' },
  { emoji: '🔧', title: 'Metal Work & Welding', desc: 'Students master welding and sheet metal work over three years — creating student beds, playground equipment, and fabricated structures. Twelve intensive practical hours per week lead to the National Vocational Technical trade test. Graduates may continue to a two-year Grade One programme for full job-market readiness.', img: '/metal-3.webp' },
]

export default function Programmes() {
  const gridRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(gridRef.current?.querySelectorAll('.prog-detail-card') || [], { opacity: 0, y: 56 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.14,
      scrollTrigger: { trigger: gridRef.current, start: 'top 76%', once: true }
    })
  }, [])

  return (
    <>
      <section className="page-hero">
        <YoutubeBg id="bX2SrT9_7rM" />
        <div className="page-hero-overlay" />
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={18} color="var(--accent)" /> Programmes
        </span>
        <h1>Technical &amp; Vocational Programmes</h1>
        <p>Four industry-relevant programmes equipping students with hearing and visual impairments with practical skills for real-world careers and economic independence.</p>
      </section>

      <section className="inner-sec">
        <div style={{ maxWidth: 680, marginBottom: 52 }}>
          <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
            <CrossStar size={17} /> What We Offer
          </span>
          <h2 style={{ marginBottom: 14 }}>Hands-On Skills for a Competitive Future</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Offered through the attached Bechem Technical Institute for the Deaf and Blind, our 4 vocational programmes
            complement the academic curriculum. Students apply after completing the Basic Education Certificate
            Examination (BECE) and are admitted based on exam scores and entrance test performance.
          </p>
        </div>

        <div ref={gridRef} className="prog-detail-grid">
          {progs.map(({ emoji, title, desc, img: src }) => (
            <div key={title} className="prog-detail-card">
              <div className="prog-detail-img"><img src={src} alt={title} /></div>
              <div className="prog-detail-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
                  <span style={{ background: 'var(--card)', padding: '3px 10px', borderRadius: 100, fontSize: '0.7rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technical Programme</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/admissions" className="btn-outline-dark" style={{ marginTop: 18, display: 'inline-flex' }}>
                  Apply for This Programme <CrossStar size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-bg"><img src="/school-partnership.jpg" alt="Vocational training" /></div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Build Skills That Last a Lifetime</h2>
          <p>Enrol in one of our four technical and vocational programmes today.</p>
          <div className="cta-btns">
            <Link to="/admissions" className="btn-yellow">Apply Now <CrossStar size={18} /></Link>
            <Link to="/contact" className="btn-outline-white">Ask a Question <CrossStar size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
