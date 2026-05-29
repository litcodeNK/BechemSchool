import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CrossStar from '../components/CrossStar'

gsap.registerPlugin(ScrollTrigger)
const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

const cats = [
  { title: 'School Facilities', seeds: ['fac1','fac2','fac3','fac4','fac5','fac6'] },
  { title: 'Classroom Activities', seeds: ['cls1','cls2','cls3','cls4','cls5','cls6'] },
  { title: 'Technical & Vocational Labs', seeds: ['lab1','lab2','lab3','lab4'] },
  { title: 'Sports & Physical Education', seeds: ['spt1','spt2','spt3','spt4'] },
  { title: 'Cultural Events & Celebrations', seeds: ['clt1','clt2','clt3','clt4'] },
  { title: 'Graduation & Prize-Giving Days', seeds: ['grd1','grd2','grd3','grd4'] },
]

export default function Gallery() {
  useEffect(() => {
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
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={13} color="var(--accent)" /> Gallery
        </span>
        <h1>Life at Bechem School For The Deaf and Blind</h1>
        <p>A glimpse into our vibrant school community — classrooms, workshops, sports, events, and celebrations.</p>
      </section>

      <section className="gallery-sec">
        {cats.map(({ title, seeds }) => (
          <div key={title} className="gal-category">
            <span className="s-label" style={{ display: 'flex', marginBottom: 8 }}>
              <CrossStar size={12} /> {title}
            </span>
            <h2>{title}</h2>
            <div className="gal-grid">
              {seeds.map(s => (
                <div key={s} className="gal-item">
                  <img src={img(s, 600, 400)} alt={title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
