import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)

const docs = [
  { id: '_zjZ9GvTpic',  title: 'School Documentary 1' },
  { id: 'SRGnYbmhs4Q',  title: 'School Documentary 2' },
  { id: 'BeLNOPN0vRo',  title: 'School Documentary 3' },
  { id: 'OfzoJr0wR70',  title: 'School Documentary 4' },
  { id: 'bX2SrT9_7rM',  title: 'School Documentary 5' },
  { id: '35YO1WYnsJw',  title: 'School Documentary 6' },
  { id: 'eE5xz07RZPA',  title: 'School Documentary 7' },
  { id: 'OLVRFLWfmxA',  title: 'School Documentary 8' },
  { id: '__JHZ89mJgU',  title: 'School Documentary 9' },
]

const cats = [
  {
    title: 'School Campus & Facilities',
    images: [
      '/school-building-1.jpg',
      '/school-building-2.jpg',
      '/school-signage.jpg',
    ],
  },
  {
    title: 'Classroom & Academic Life',
    images: [
      '/students-classroom.jpg',
      '/students-assembly-1.jpg',
      '/students-assembly-2.jpg',
      '/students-staff-group.jpg',
      '/students-group-blue.jpg',
      '/staff-group.jpg',
    ],
  },
  {
    title: 'Technical & Vocational Workshops',
    images: [
      '/construction-1.webp',
      '/wood-3.webp',
      '/wood-2.webp',
      '/fashion-2.webp',
      '/fashion-1.webp',
      '/fashion-4.webp',
      '/metal-3.webp',
      '/metal-2.webp',
      '/metal-1.webp',
    ],
  },
  {
    title: 'Student Achievements',
    images: [
      '/student-plane-model.jpg',
      '/student-bus-model.jpg',
      '/student-uniform.jpg',
    ],
  },
  {
    title: 'Events, Partnerships & Community',
    images: [
      '/students-ceremony.jpg',
      '/students-awards.jpg',
      '/school-partnership.jpg',
      '/community-1.jpg',
    ],
  },
]

export default function Gallery() {
  useEffect(() => {
    gsap.fromTo('.doc-item', { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.07,
      scrollTrigger: { trigger: '.doc-grid', start: 'top 83%', once: true }
    })

    cats.forEach((_, ci) => {
      const grid = document.querySelectorAll('.gal-category')[ci]?.querySelector('.gal-grid')
      if (!grid) return
      gsap.fromTo(grid.querySelectorAll('.gal-item'), { opacity: 0, scale: 0.93 }, {
        opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out', stagger: 0.06,
        scrollTrigger: { trigger: grid, start: 'top 83%', once: true }
      })
    })
  }, [])

  return (
    <>
      <section className="page-hero">
        <video className="page-hero-video" src="/hero-video.mp4" autoPlay muted loop playsInline />
        <div className="page-hero-overlay" />
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={18} color="var(--accent)" /> Documentaries
        </span>
        <h1>Life at Bechem School For The Deaf and Blind</h1>
        <p>Watch our documentary films and explore our vibrant school community — classrooms, workshops, events, and celebrations.</p>
      </section>

      {/* ── Documentary Videos ── */}
      <section className="gallery-sec">
        <div className="gal-category">
          <span className="s-label" style={{ display: 'flex', marginBottom: 8 }}>
            <CrossStar size={17} /> School Documentaries
          </span>
          <h2>Documentary Films</h2>
          <div className="doc-grid">
            {docs.map(({ id, title }) => (
              <div key={id} className="doc-item">
                <div className="doc-iframe-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                    title={title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="doc-label">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="gallery-sec">
        {cats.map(({ title, images }) => (
          <div key={title} className="gal-category">
            <span className="s-label" style={{ display: 'flex', marginBottom: 8 }}>
              <CrossStar size={17} /> {title}
            </span>
            <h2>{title}</h2>
            <div className="gal-grid">
              {images.map((src, i) => (
                <div key={i} className="gal-item">
                  <img src={src} alt={title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
