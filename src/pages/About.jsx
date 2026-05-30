import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Star, Award, Zap, Heart } from 'lucide-react'
import CrossStar from '../components/CrossStar'
import YoutubeBg from '../components/YoutubeBg'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: <Shield size={20} />, title: 'Integrity', desc: 'We uphold honesty and transparency in all we do.' },
  { icon: <Star size={20} />, title: 'Excellence', desc: 'We pursue the highest academic and vocational standards.' },
  { icon: <Award size={20} />, title: 'Discipline', desc: 'We nurture self-discipline as a foundation for success.' },
  { icon: <Zap size={20} />, title: 'Creativity', desc: 'We inspire innovative thinking and problem solving.' },
  { icon: <Heart size={20} />, title: 'Respect', desc: 'We foster mutual respect among students, staff, and families.' },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-about')
    if (!els) return
    gsap.fromTo(Array.from(els), { opacity: 0, y: 48 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true }
    })
    gsap.fromTo(ref.current?.querySelectorAll('.value-card') || [], { opacity: 0, y: 36, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power2.out', stagger: 0.08,
      scrollTrigger: { trigger: '.values-grid', start: 'top 80%', once: true }
    })
  }, [])

  return (
    <>
      <section className="page-hero">
        <YoutubeBg id="_zjZ9GvTpic" />
        <div className="page-hero-overlay" />
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={18} color="var(--accent)" /> About Us
        </span>
        <h1>Our Story, Mission &amp; Vision</h1>
        <p>Discover who we are, what drives us, and the values that shape every learner who walks through our doors.</p>
      </section>

      <section ref={ref} className="inner-sec">
        {/* Story */}
        <div className="about-story-grid fade-about">
          <div className="about-story-img">
            <img src="/school-building-1.jpg" alt="Bechem School For The Deaf and Blind" />
          </div>
          <div className="about-story-text">
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={17} /> Our Story
            </span>
            <h2>Serving Students Across Ghana's Brong Ahafo Region</h2>
            <p>Bechem School for the Deaf and Blind is a <strong>fully residential boarding school</strong> located in the Tano South District of the Brong Ahafo Region, dedicated to educating children with hearing and visual impairments from Kindergarten through Junior High School. Students from across Ghana live on campus in a safe, structured, and nurturing boarding environment. An attached technical institute — Bechem Technical Institute for the Deaf and Blind — extends this mission through specialised vocational programmes for older students.</p>
            <p>Together, our two-school system provides a seamless educational pathway combining strong moral values, academic knowledge, and practical trade skills that empower every boarding student to achieve economic independence.</p>
            <div className="about-stats">
              {[{ num: '2', lbl: 'School Divisions' }, { num: '4', lbl: 'Tech Programmes' }, { num: '10', lbl: 'JHS Subjects' }].map(({ num, lbl }, i) => (
                <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                  {i > 0 && <div className="about-divider" />}
                  <div className="about-stat-item">
                    <div className="num">{num}</div>
                    <div className="lbl">{lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission + Vision */}
        <div className="about-mv-grid fade-about">
          {[
            { label: 'Our Mission', text: 'To provide quality education and vocational training that empowers every student with the knowledge, skills, and values needed for economic independence and lifelong success.', img: '/students-staff-group.jpg' },
            { label: 'Our Vision', text: 'To be a leading institution in Ghana recognised for excellence in educating students with hearing and visual impairments and equipping them for productive, independent lives.', img: '/students-group-blue.jpg' },
          ].map(({ label, text, img: imgSrc }) => (
            <div key={label} style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 280 }}>
              <img src={imgSrc} alt={label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.38)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: 40, color: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <span className="s-label light" style={{ marginBottom: 12, display: 'flex' }}>
                  <CrossStar size={17} color="var(--accent)" /> {label}
                </span>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.72, color: 'rgba(255,255,255,0.9)' }}>{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="fade-about">
          <span className="s-label" style={{ justifyContent: 'center', display: 'flex', marginBottom: 12 }}>
            <CrossStar size={17} /> Core Values
          </span>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 40 }}>The Principles That Guide Us</h2>
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <div className="value-card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-bg"><img src="/school-building-2.jpg" alt="Join us" /></div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2>Join the Bechem School For The Deaf and Blind Family</h2>
          <p>Quality education and technical skills — shaping Ghana's future leaders.</p>
          <div className="cta-btns">
            <Link to="/admissions" className="btn-yellow">Apply Now <CrossStar size={18} /></Link>
            <Link to="/contact" className="btn-outline-white">Contact Us <CrossStar size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
