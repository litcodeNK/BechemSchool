import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookOpen, Monitor, Leaf, Globe, ChevronLeft, ChevronRight,
  BookMarked, Users, Award, Smile
} from 'lucide-react'
import HeroVideo from '../components/HeroVideo'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

/* ──────────────────────────────────────────────────────── */
/*  DATA                                                    */
/* ──────────────────────────────────────────────────────── */
const features = [
  { icon: <BookOpen size={16} strokeWidth={1.8} />, label: 'Literacy & Reading Programmes' },
  { icon: <Monitor size={16} strokeWidth={1.8} />, label: 'Tech & Vocational Training' },
  { icon: <Leaf size={16} strokeWidth={1.8} />, label: 'Primary School Education' },
  { icon: <Globe size={16} strokeWidth={1.8} />, label: 'Common Core Programme (JHS)' },
]

const whyFeatures = [
  { icon: <BookOpen size={19} strokeWidth={1.9} />, title: 'Builds Strong Learning Foundations', desc: 'Structured education supports language, mathematics, and critical thinking skills.' },
  { icon: <Smile size={19} strokeWidth={1.9} />, title: 'Encourages Social & Emotional Growth', desc: 'Students learn to collaborate, communicate, and express themselves confidently.' },
  { icon: <Award size={19} strokeWidth={1.9} />, title: 'Technical Skills for the Future', desc: 'Vocational programmes prepare students for real-world careers and entrepreneurship.' },
  { icon: <Leaf size={19} strokeWidth={1.9} />, title: 'Supports Holistic Development', desc: 'Play, creativity, and moral education shape well-rounded, value-driven citizens.' },
]

const programmes = [
  { badge: 'Basic 1 – 6', title: 'Primary School', desc: 'A strong foundation in literacy, numeracy, and general knowledge for pupils following the GES curriculum.', img: img('primary-s1', 800, 480) },
  { badge: 'Basic 7 – 9', title: 'Junior High School', desc: 'The Common Core Programme equipping students with 10 core subjects for success in Senior High School.', img: img('jhs-s2', 800, 480) },
  { badge: 'Technical Programme', title: 'Building Construction Technology', desc: 'Bricklaying, masonry, carpentry, and basic structural design. Preparing students for the construction industry.', img: img('construction-s3', 800, 480) },
  { badge: 'Technical Programme', title: 'Catering & Hospitality Management', desc: 'Food preparation, nutrition, table service, and event management for the hospitality sector.', img: img('catering-s4', 800, 480) },
  { badge: 'Technical Programme', title: 'Fashion Designing Technology', desc: 'Garment construction, fabric selection, pattern making, and fashion illustration.', img: img('fashion-s5', 800, 480) },
]

const events = [
  { date: 'JUNE 20', title: 'End-of-Year Graduation Ceremony', desc: 'A joyful showcase where students present their learning achievements and receive awards.', img: img('event-grad', 900, 600) },
  { date: 'SEPT 4', title: 'Back-to-School Welcome Day', desc: 'A warm welcome party to kick off the new academic year with games, songs, and activities.', img: img('event-back', 900, 600) },
]

const testimonials = [
  { quote: '"The teachers here genuinely care about every child. My daughter has grown so much in confidence and curiosity. We couldn\'t be happier!"', author: 'Mrs. Adjoa Mensah', role: 'Parent of Basic 4 student', date: '15.01.2026', img: img('parent-main', 700, 580) },
  { quote: '"The school\'s approach to combining academics and vocational skills is exactly what our children need. Highly recommended!"', author: 'Mr. Kwesi Asante', role: 'Parent of JHS 3 student', date: '20.02.2026' },
  { quote: '"From the warm teachers to the safe environment, everything about Bechem School For The Deaf and Blind makes us feel our child is in the best hands."', author: 'Mrs. Ama Boateng', role: 'Parent of Basic 2 student', date: '15.12.2025' },
]

/* ──────────────────────────────────────────────────────── */
export default function Home() {
  const heroTitleRef = useRef(null)
  const heroBtnsRef = useRef(null)
  const cardsRef = useRef(null)
  const aboutTextRef = useRef(null)
  const eduRef = useRef(null)
  const whyRef = useRef(null)
  const progRef = useRef(null)
  const evRef = useRef(null)
  const testRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  /* ── Hero entrance ── */
  useEffect(() => {
    const words = heroTitleRef.current?.querySelectorAll('.word span')
    if (!words) return
    gsap.set(words, { y: '115%' })
    gsap.set(heroBtnsRef.current, { opacity: 0, y: 22 })
    const tl = gsap.timeline({ delay: 0.6 })
    tl.to(words, { y: '0%', duration: 1.05, ease: 'power3.out', stagger: 0.055 })
    tl.to(heroBtnsRef.current, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }, '-=0.5')
  }, [])

  /* ── Info cards ── */
  useEffect(() => {
    const cards = cardsRef.current ? Array.from(cardsRef.current.children) : []
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true } }
    )
  }, [])

  /* ── About scroll-reveal ── */
  useEffect(() => {
    const words = aboutTextRef.current?.querySelectorAll('.rw')
    if (!words?.length) return
    ScrollTrigger.create({
      trigger: aboutTextRef.current,
      start: 'top 68%', end: 'bottom 35%', scrub: 0.6,
      onUpdate(self) {
        const lit = Math.floor(self.progress * words.length * 1.35)
        words.forEach((w, i) => w.classList.toggle('lit', i < lit))
      },
    })
  }, [])

  /* ── Educators ── */
  useEffect(() => {
    gsap.fromTo(eduRef.current?.querySelectorAll('.edu-card') || [],
      { opacity: 0, y: 70, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.out', stagger: 0.18,
        scrollTrigger: { trigger: eduRef.current, start: 'top 78%', once: true } }
    )
  }, [])

  /* ── Why features ── */
  useEffect(() => {
    gsap.fromTo(whyRef.current?.querySelector('.why-img'),
      { opacity: 0, x: -44 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: whyRef.current, start: 'top 72%', once: true } }
    )
    gsap.fromTo(whyRef.current?.querySelectorAll('.why-feat') || [],
      { opacity: 0, x: 44 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', stagger: 0.13,
        scrollTrigger: { trigger: whyRef.current, start: 'top 72%', once: true } }
    )
  }, [])

  /* ── Programme cards ── */
  useEffect(() => {
    gsap.fromTo(progRef.current?.querySelectorAll('.prog-card') || [],
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.18,
        scrollTrigger: { trigger: progRef.current, start: 'top 80%', once: true } }
    )
  }, [])

  /* ── Events ── */
  useEffect(() => {
    gsap.fromTo(evRef.current?.querySelectorAll('.ev-card') || [],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.2,
        scrollTrigger: { trigger: evRef.current, start: 'top 76%', once: true } }
    )
  }, [])

  /* ── Testimonials ── */
  useEffect(() => {
    gsap.fromTo(testRef.current?.querySelectorAll('.test-photo,.test-card') || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: testRef.current, start: 'top 76%', once: true } }
    )
  }, [])

  /* ── Stats counter ── */
  useEffect(() => {
    const targets = [{ val: 500, suffix: '+' }, { val: 5, suffix: '' }]
    statsRef.current?.querySelectorAll('.stat-badge-num').forEach((el, i) => {
      gsap.fromTo({ v: 0 }, { v: targets[i].val }, {
        duration: 2, ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(this.targets()[0].v) + targets[i].suffix },
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true }
      })
    })
  }, [])

  /* ── Section headings ── */
  useEffect(() => {
    document.querySelectorAll('.anim-heading').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true } }
      )
    })
  }, [])

  /* ── CTA ── */
  useEffect(() => {
    gsap.fromTo(ctaRef.current?.querySelector('.cta-content'),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 72%', once: true } }
    )
  }, [])

  const missionWords = `Bechem School For The Deaf and Blind is a dedicated institution offering quality Primary and Junior High School education in Ghana. We blend academic excellence with practical technical skills to prepare students for the future. Our learners leave with knowledge, values, and the confidence to thrive in any endeavour they pursue.`.split(' ')

  return (
    <>
      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="hero">
        <HeroVideo />
        <div className="hero-gradient" />

        <div className="hero-content">
          <h1 ref={heroTitleRef}>
            {['Nurturing', 'Excellence', 'in', 'Education', '&', 'Technical', 'Skills'].map((w, i) => (
              <span className="word" key={i} style={{ marginRight: '0.22em' }}>
                <span>{w}</span>
              </span>
            ))}
          </h1>
          <div ref={heroBtnsRef} className="hero-btns">
            <Link to="/admissions" className="btn-yellow">
              Book a School Visit <CrossStar size={13} />
            </Link>
            <Link to="/programmes" className="btn-outline-white">
              Check Our Programmes <CrossStar size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════ INFO CARDS ════════════════════════ */}
      <div style={{ background: 'var(--bg)', paddingBottom: 60 }}>
        <div ref={cardsRef} className="info-cards-wrap">
          <div className="info-cards">
            {/* Features */}
            <div className="ic ic-features">
              <h3>Features</h3>
              <ul>
                {features.map(({ icon, label }) => (
                  <li key={label}>{icon} {label}</li>
                ))}
              </ul>
            </div>

            {/* Center video */}
            <div className="ic ic-image">
              <video autoPlay muted loop playsInline src="/card-video.mp4" />
            </div>

            {/* Rating */}
            <div className="ic ic-rating">
              <div>
                <div className="star-num">
                  <span className="star">★</span>
                  <span className="num">4.9</span>
                </div>
                <p className="quote-text">
                  "Bechem School For The Deaf and Blind transformed our child's love of learning. The teachers are dedicated and the programmes are outstanding."
                </p>
                <div className="trusted">
                  <div className="avatar-sm"><img src={img('avatar1', 40, 40)} alt="" /></div>
                  <div>
                    <strong>Trusted by</strong>
                    <p>Families across Ghana</p>
                  </div>
                </div>
              </div>
              <div className="ic-footer">
                <span className="date">15.01.2026</span>
                <span className="quotes">"</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════ ABOUT REVEAL ════════════════════════ */}
      <section className="about-sec">
        <div className="about-label-wrap">
          <span className="s-label">
            <CrossStar size={13} color="var(--text)" />
            About Our Academy
          </span>
        </div>
        <p ref={aboutTextRef} className="about-reveal anim-heading">
          {missionWords.map((w, i) => (
            <span className="rw" key={i}>{w}{' '}</span>
          ))}
        </p>
      </section>

      {/* ════════════════════════ EDUCATORS DARK ════════════════════════ */}
      <section ref={eduRef} className="educators-sec">
        <div className="educators-head">
          <div>
            <span className="s-label accent" style={{ marginBottom: 16, display: 'flex' }}>
              <CrossStar size={13} color="var(--accent)" />
              Why It's Important
            </span>
            <h2 className="anim-heading">Dedicated Teachers Guiding Every Child's Growth</h2>
          </div>
          <div className="edu-nav">
            <Link to="/gallery">View Our Gallery</Link>
            <button className="circle-btn" aria-label="Previous"><ChevronLeft size={18} /></button>
            <button className="circle-btn" aria-label="Next"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="educators-grid">
          {[
            { seed: 'teacher1', caption: 'Qualified & Certified Educators', desc: 'All our teachers are trained in modern, child-centred teaching methods.' },
            { seed: 'students2', caption: 'Individual Attention & Care', desc: 'Manageable class sizes ensure every student receives personalised support and guidance.' },
          ].map(({ seed, caption, desc }) => (
            <div key={seed} className="edu-card">
              <img src={img(seed, 800, 600)} alt={caption} />
              <div className="edu-caption">
                <h4>{caption}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════ WHY SECTION ════════════════════════ */}
      <section ref={whyRef} className="why-sec">
        <div className="why-head">
          <span className="s-label anim-heading" style={{ display: 'flex', marginBottom: 12 }}>
            <CrossStar size={13} color="var(--text)" />
            Why It's Important
          </span>
          <h2 className="anim-heading">Why Quality Education Shapes a Child's Future</h2>
        </div>
        <div className="why-grid">
          <div className="why-img">
            <img src={img('child-study', 700, 550)} alt="Child learning at Bechem School For The Deaf and Blind" />
          </div>
          <div className="why-feats">
            {whyFeatures.map(({ icon, title, desc }) => (
              <div key={title} className="why-feat">
                <div className="feat-icon">{icon}</div>
                <div className="feat-text">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ STATS + MISSION ════════════════════════ */}
      <section ref={statsRef} className="stats-sec">
        <div className="stats-inner">
          <div className="stats-img-card">
            <img src={img('student-bright', 700, 520)} alt="Bechem School For The Deaf and Blind student" />
            <div className="stat-badges-abs">
              <div className="stat-badge-pill">
                <div>
                  <div className="stat-badge-num">500</div>
                  <div className="stat-badge-lbl">Students<br />Enrolled</div>
                </div>
              </div>
              <div className="stat-badge-pill">
                <div>
                  <div className="stat-badge-num">5</div>
                  <div className="stat-badge-lbl">Technical<br />Programmes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-card">
            <div className="mc-title">Mission Highlights</div>
            <div className="mc-logo">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M30 5C30 5 22 22 5 30C22 38 30 55 30 55C30 55 38 38 55 30C38 22 30 5 30 5Z" fill="var(--accent)" opacity="0.85"/>
                <path d="M30 14C30 14 26 24 16 30C26 36 30 46 30 46C30 46 34 36 44 30C34 24 30 14 30 14Z" fill="var(--accent)"/>
              </svg>
            </div>
            <ul className="mc-list">
              {[
                { icon: <BookOpen size={15} strokeWidth={1.8} />, label: 'Primary School Education (KG – Basic 6)' },
                { icon: <Monitor size={15} strokeWidth={1.8} />, label: 'Junior High School — Common Core Programme' },
                { icon: <BookMarked size={15} strokeWidth={1.8} />, label: '10 Core JHS Subjects' },
                { icon: <Leaf size={15} strokeWidth={1.8} />, label: '5 Technical & Vocational Programmes' },
                { icon: <Users size={15} strokeWidth={1.8} />, label: 'Qualified & Dedicated Teaching Staff' },
              ].map(({ icon, label }) => (
                <li key={label}>{icon} {label}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner-style logos row */}
        <div className="partners">
          {['GES Accredited', 'WAEC Partner', 'NVTI Affiliated', 'Community Trusted', 'Ghana Edu. Board'].map(l => (
            <span key={l} className="partner-logo">{l}</span>
          ))}
        </div>
      </section>

      {/* ════════════════════════ PROGRAMMES ════════════════════════ */}
      <section className="prog-sec">
        <div className="prog-inner">
          {/* Sticky left */}
          <div className="prog-left">
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={13} color="var(--text)" />
              What We Teach
            </span>
            <h2 className="anim-heading">
              Academic &amp; Technical Programmes for Future Success
            </h2>
            <p>
              Our programmes are designed to address educational gaps at every stage of learning —
              from early literacy to industry-ready technical skills — each focused on
              creating sustainable, community-driven impact.
            </p>
            <Link to="/programmes" className="btn-outline-dark">
              Explore All Programmes <CrossStar size={12} />
            </Link>
          </div>

          {/* Scrolling right */}
          <div ref={progRef} className="prog-right">
            {programmes.map(({ badge, title, desc, img: src }) => (
              <div key={title} className="prog-card">
                <div className="prog-card-img">
                  <img src={src} alt={title} />
                </div>
                <div className="prog-card-body">
                  <span className="prog-badge">{badge}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/programmes" className="btn-outline-dark" style={{ fontSize: '0.84rem', padding: '10px 20px' }}>
                    Learn More <CrossStar size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ EVENTS ════════════════════════ */}
      <section ref={evRef} className="events-sec">
        <div className="events-head">
          <div>
            <span className="s-label" style={{ marginBottom: 12, display: 'flex' }}>
              <CrossStar size={13} color="var(--text)" />
              Why It's Important
            </span>
            <h2 className="anim-heading">Exciting Events and Activities for Young Learners</h2>
          </div>
          <div className="ev-nav">
            <Link to="/gallery">View All Events</Link>
            <button className="circle-btn dark-mode" aria-label="Previous"><ChevronLeft size={18} /></button>
            <button className="circle-btn dark-mode" aria-label="Next"><ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="events-grid">
          {events.map(({ date, title, desc, img: src }) => (
            <div key={title} className="ev-card">
              <img src={src} alt={title} />
              <span className="ev-date">{date}</span>
              <div className="ev-caption">
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
                <Link to="/gallery" className="btn-dark" style={{ fontSize: '0.82rem', padding: '9px 18px', whiteSpace: 'nowrap' }}>
                  Learn More <CrossStar size={11} color="white" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════ TESTIMONIALS ════════════════════════ */}
      <section ref={testRef} className="test-sec">
        <div className="test-head">
          <span className="s-label" style={{ justifyContent: 'center', display: 'flex' }}>
            <CrossStar size={13} color="var(--text)" />
            Parent Testimonials
          </span>
          <h2 className="anim-heading">Stories from Parents Who Trust Bechem School For The Deaf and Blind</h2>
        </div>

        <div className="test-layout">
          {/* Main photo */}
          <div className="test-photo">
            <img src={testimonials[0].img} alt="Parent testimonial" />
            <div className="test-photo-card">
              <p className="test-photo-quote">{testimonials[0].quote}</p>
              <div className="test-photo-footer">
                <div>
                  <div className="test-rating">★★★★★</div>
                  <div className="test-author-name">{testimonials[0].author}</div>
                  <div className="test-author-role">{testimonials[0].role}</div>
                </div>
                <span className="test-quote-mark">"</span>
              </div>
            </div>
          </div>

          {/* Stacked cards */}
          <div className="test-right">
            {testimonials.slice(1).map((t, i) => (
              <div key={i} className="test-card">
                <p className="test-card-quote">{t.quote}</p>
                <div className="test-card-footer">
                  <div className="test-card-author-row">
                    <div className="test-avatar">
                      <img src={img(`avatar${i + 2}`, 36, 36)} alt={t.author} />
                    </div>
                    <div>
                      <div className="test-name">{t.author}</div>
                      <div className="test-role">{t.role}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="test-card-date">{t.date}</div>
                    <span style={{ fontSize: '1.5rem', color: 'var(--border)', lineHeight: 1 }}>"</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ CTA BANNER ════════════════════════ */}
      <section ref={ctaRef} className="cta-banner">
        <div className="cta-bg"><img src={img('cta-school', 1920, 800)} alt="Bechem School For The Deaf and Blind" /></div>
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2 className="anim-heading">Secure Your Child's Place at Bechem School For The Deaf and Blind</h2>
          <p>Join our warm, nurturing community of learners in Ghana.</p>
          <div className="cta-btns">
            <Link to="/admissions" className="btn-yellow">
              Book a School Visit <CrossStar size={13} />
            </Link>
            <Link to="/admissions" className="btn-outline-white">
              Apply for Admission <CrossStar size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
