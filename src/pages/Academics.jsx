import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)
const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

const jhsSubjects = [
  'English Language', 'Mathematics', 'Science', 'Social Studies',
  'Religious and Moral Education', 'Computing', 'Creative Art and Design',
  'Career Technology', 'Ghanaian Language (Braille / Sign Language)', 'Physical and Health Education',
]

export default function Academics() {
  const ref = useRef(null)
  useEffect(() => {
    gsap.fromTo(ref.current?.querySelectorAll('.subject-chip') || [], { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.04,
      scrollTrigger: { trigger: '.subjects-grid', start: 'top 80%', once: true }
    })
  }, [])

  return (
    <>
      <section className="page-hero">
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={13} color="var(--accent)" /> Academics
        </span>
        <h1>Our Academic Curriculum</h1>
        <p>Two divisions — Primary School and Junior High School — offering GES-approved programmes that build strong foundations.</p>
      </section>

      <section ref={ref} className="inner-sec">
        {/* Primary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Division A
            </span>
            <h2 style={{ marginBottom: 14 }}>Primary School</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 10, fontSize: '0.9rem', lineHeight: 1.8 }}>
              The Primary School division provides foundational education in literacy, numeracy, and general knowledge
              for pupils from Basic 1 to Basic 6, following the Ghana Education Service (GES) curriculum.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem', lineHeight: 1.8 }}>
              Our primary programme nurtures curiosity, builds confidence, and prepares every child for the next stage of their academic journey.
            </p>
            <Link to="/admissions" className="btn-yellow">
              Enrol in Primary <CrossStar size={13} />
            </Link>
          </div>
          <div style={{ height: 380, borderRadius: 20, overflow: 'hidden' }}>
            <img src={img('primary-class-a', 700, 420)} alt="Primary School" />
          </div>
        </div>

        {/* JHS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 48 }}>
          <div style={{ height: 380, borderRadius: 20, overflow: 'hidden' }}>
            <img src={img('jhs-class-b', 700, 420)} alt="Junior High School" />
          </div>
          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Division B
            </span>
            <h2 style={{ marginBottom: 14 }}>Junior High School (JHS)</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 10, fontSize: '0.9rem', lineHeight: 1.8 }}>
              The JHS division covers Basic 7 to Basic 9 and follows the Common Core Programme (CCP)
              as approved by the Ghana Education Service.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem', lineHeight: 1.8 }}>
              The CCP equips students with a broad, balanced education across 10 core subjects,
              preparing them for Senior High School and beyond.
            </p>
            <Link to="/admissions" className="btn-yellow">
              Enrol in JHS <CrossStar size={13} />
            </Link>
          </div>
        </div>

        <span className="s-label" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={12} /> Common Core Programme — 10 Subjects
        </span>
        <div className="subjects-grid">
          {jhsSubjects.map((s, i) => (
            <div key={s} className="subject-chip">
              <span className="subject-num">{i + 1}</span>
              {s}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-bg"><img src={img('academics-cta-b', 1920, 700)} alt="Academic excellence" /></div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Start Your Child's Academic Journey</h2>
          <p>Enrol today and give your child the foundation they deserve.</p>
          <div className="cta-btns">
            <Link to="/admissions" className="btn-yellow">Apply Now <CrossStar size={13} /></Link>
            <Link to="/contact" className="btn-outline-white">Ask a Question <CrossStar size={13} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
