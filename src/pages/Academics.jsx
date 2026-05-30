import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)

const primarySubjects = [
  'English Language', 'Mathematics', 'Integrated Science',
  'Religious and Moral Education', 'Citizenship Education',
  'Physical Education', 'Creative Arts',
]

const jhsSubjects = [
  'English Language', 'Mathematics', 'Integrated Science', 'Social Studies',
  'Religious and Moral Studies', 'Pre-Technical Skills', 'Home Economics',
  'Information and Communication Technology', 'Creative Arts', 'Physical Education',
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
        <p>Three divisions — Kindergarten, Primary School, and Junior High School — providing complete foundational education for students with hearing and visual impairments in the Brong Ahafo Region.</p>
      </section>

      <section ref={ref} className="inner-sec">
        {/* Kindergarten */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Division A
            </span>
            <h2 style={{ marginBottom: 14 }}>Kindergarten</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 10, fontSize: '0.9rem', lineHeight: 1.8 }}>
              The Kindergarten division provides early childhood education in a safe, nurturing environment.
              Our KG classes focus on building early literacy, numeracy, and social skills through structured
              play and guided learning.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem', lineHeight: 1.8 }}>
              Students are equipped with key learning materials — exercise books, drawing books, crayons,
              slates with the alphabet, and copy books — to lay strong foundations for their primary years.
            </p>
            <Link to="/admissions" className="btn-yellow">
              Enrol in Kindergarten <CrossStar size={13} />
            </Link>
          </div>
          <div style={{ height: 380, borderRadius: 20, overflow: 'hidden' }}>
            <img src="/students-assembly-2.jpg" alt="Kindergarten students" />
          </div>
        </div>

        {/* Primary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 48 }}>
          <div style={{ height: 380, borderRadius: 20, overflow: 'hidden' }}>
            <img src="/school-building-1.jpg" alt="Primary School building" />
          </div>
          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Division B
            </span>
            <h2 style={{ marginBottom: 14 }}>Primary School (Basic 1 – 6)</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 10, fontSize: '0.9rem', lineHeight: 1.8 }}>
              The Primary division covers Basic 1 to Basic 6, following the Ghana Education Service (GES)
              curriculum. Students receive core knowledge across seven subjects, building the academic foundation
              they will carry through JHS and beyond.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem', lineHeight: 1.8 }}>
              Primary education also instils an understanding of students' rights and duties as citizens —
              a cornerstone of the school's commitment to moral development alongside academic achievement.
            </p>
            <Link to="/admissions" className="btn-yellow">
              Enrol in Primary <CrossStar size={13} />
            </Link>
          </div>
        </div>

        <span className="s-label" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={12} /> Primary School — 7 Core Subjects
        </span>
        <div className="subjects-grid" style={{ marginBottom: 80 }}>
          {primarySubjects.map((s, i) => (
            <div key={s} className="subject-chip">
              <span className="subject-num">{i + 1}</span>
              {s}
            </div>
          ))}
        </div>

        {/* JHS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 48 }}>
          <div>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={12} /> Division C
            </span>
            <h2 style={{ marginBottom: 14 }}>Junior High School (Basic 7 – 9)</h2>
            <p style={{ color: 'var(--muted)', marginBottom: 10, fontSize: '0.9rem', lineHeight: 1.8 }}>
              After completing Primary, students enter Junior High School where the core subjects are studied
              more intensely. The JHS programme prepares students for the Basic Education Certificate
              Examination (BECE).
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '0.9rem', lineHeight: 1.8 }}>
              On completing JHS, students may apply to the attached Bechem Technical Institute for the Deaf and Blind
              to enrol in one of four specialised vocational programmes in carpentry, fashion, metal work,
              or building and construction.
            </p>
            <Link to="/admissions" className="btn-yellow">
              Enrol in JHS <CrossStar size={13} />
            </Link>
          </div>
          <div style={{ height: 380, borderRadius: 20, overflow: 'hidden' }}>
            <img src="/fashion-4.webp" alt="Junior High School classroom" />
          </div>
        </div>

        <span className="s-label" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={12} /> Junior High School — 10 Core Subjects
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
        <div className="cta-bg"><img src="/school-building-2.jpg" alt="Academic excellence" /></div>
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
