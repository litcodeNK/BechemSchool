import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)
const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

const progs = [
  { emoji: '🏗️', title: 'Building Construction Technology', desc: 'Students learn bricklaying, masonry, carpentry, and basic structural design. This programme prepares students for careers in construction or further technical education.', img: img('construction-p', 700, 300) },
  { emoji: '🍽️', title: 'Catering and Hospitality Management', desc: 'Covers food preparation, nutrition, table service, hospitality etiquette, and event management. Graduates are well-positioned for restaurants, hotels, and the hospitality sector.', img: img('catering-p', 700, 300) },
  { emoji: '👗', title: 'Fashion Designing Technology', desc: 'Students explore garment construction, fabric selection, pattern making, and fashion illustration. The programme nurtures creativity and prepares students for the fashion and textile industry.', img: img('fashion-p', 700, 300) },
  { emoji: '🔧', title: 'Welding and Fabrication Technology', desc: 'A hands-on programme introducing welding techniques, metal fabrication, safety practices, and basic engineering principles. Opens pathways to manufacturing and industrial careers.', img: img('welding-p', 700, 300) },
  { emoji: '🪵', title: 'Wood Technology', desc: 'Students learn furniture making, carpentry, joinery, and wood finishing. The programme develops craftsmanship and entrepreneurial thinking for the woodwork industry.', img: img('wood-p', 700, 300) },
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
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={13} color="var(--accent)" /> Programmes
        </span>
        <h1>Technical &amp; Vocational Programmes</h1>
        <p>Five industry-relevant programmes equipping students with practical skills for real-world careers and entrepreneurship.</p>
      </section>

      <section className="inner-sec">
        <div style={{ maxWidth: 680, marginBottom: 52 }}>
          <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
            <CrossStar size={12} /> What We Offer
          </span>
          <h2 style={{ marginBottom: 14 }}>Hands-On Skills for a Competitive Future</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Our 5 Technical and Vocational programmes complement the academic curriculum, ensuring every student
            leaves Bechem School For The Deaf and Blind with both knowledge and practical ability.
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
                  Apply for This Programme <CrossStar size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-bg"><img src={img('vocational-cta-b', 1920, 700)} alt="Vocational training" /></div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Build Skills That Last a Lifetime</h2>
          <p>Enrol in one of our five technical and vocational programmes today.</p>
          <div className="cta-btns">
            <Link to="/admissions" className="btn-yellow">Apply Now <CrossStar size={13} /></Link>
            <Link to="/contact" className="btn-outline-white">Ask a Question <CrossStar size={13} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
