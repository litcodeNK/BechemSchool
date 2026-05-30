import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import CrossStar from '../components/CrossStar'
import YoutubeBg from '../components/YoutubeBg'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    [formRef, infoRef].forEach((r, i) => {
      gsap.fromTo(r.current, { opacity: 0, x: i === 0 ? -40 : 40 }, {
        opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: r.current, start: 'top 76%', once: true }
      })
    })
  }, [])

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const contactItems = [
    { icon: <MapPin size={17} />, label: 'Location', val: 'P.O. Box 34, Bechem, Tano South District, Brong Ahafo Region, Ghana, West Africa' },
    { icon: <Phone size={17} />, label: 'Phone', val: '0352 092009' },
    { icon: <Mail size={17} />, label: 'Email', val: 'Bechemdeaf@gmail.com' },
    { icon: <Clock size={17} />, label: 'Office Hours', val: 'Mon – Fri, 7:30 AM – 4:00 PM' },
  ]

  return (
    <>
      <section className="page-hero">
        <YoutubeBg id="OfzoJr0wR70" />
        <div className="page-hero-overlay" />
        <span className="s-label light" style={{ marginBottom: 20, display: 'flex' }}>
          <CrossStar size={18} color="var(--accent)" /> Contact
        </span>
        <h1>Get In Touch</h1>
        <p>Reach out for admissions enquiries, general information, or to book a school visit.</p>
      </section>

      <section className="inner-sec">
        {/* Map */}
        <div className="contact-map">
          <iframe
            src="https://maps.google.com/maps?q=Bechem+Ahafo+Region+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Bechem School For The Deaf and Blind — Location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-layout">
          <div ref={infoRef} style={{ opacity: 0 }}>
            <span className="s-label" style={{ marginBottom: 14, display: 'flex' }}>
              <CrossStar size={17} /> Contact Information
            </span>
            <h2 style={{ marginBottom: 10 }}>We're Here to Help</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 0, lineHeight: 1.75 }}>
              Whether you're a parent, prospective student, or community member — don't hesitate to reach out to us.
            </p>
            <div className="contact-items">
              {contactItems.map(({ icon, label, val }) => (
                <div key={label} className="c-item">
                  <div className="c-icon">{icon}</div>
                  <div><h4>{label}</h4><p>{val}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} className="contact-form-card" style={{ opacity: 0 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 14 }}>✅</div>
                <h3>Message Sent!</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8, fontSize: '0.9rem' }}>Thank you. We'll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <div className="form-grid">
                    <div className="form-g"><label>Full Name *</label><input name="name" required placeholder="Your full name" value={form.name} onChange={onChange} /></div>
                    <div className="form-g"><label>Email Address *</label><input name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={onChange} /></div>
                    <div className="form-g"><label>Phone Number</label><input name="phone" placeholder="+233 ..." value={form.phone} onChange={onChange} /></div>
                    <div className="form-g">
                      <label>Subject *</label>
                      <select name="subject" required value={form.subject} onChange={onChange}>
                        <option value="">Select a subject</option>
                        <option>Admissions Enquiry</option>
                        <option>Academic Information</option>
                        <option>Technical Programmes</option>
                        <option>Book a School Visit</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div className="form-g full"><label>Message *</label><textarea name="message" required placeholder="Write your message here..." value={form.message} onChange={onChange} /></div>
                  </div>
                  <button type="submit" className="btn-yellow" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                    Send Message <CrossStar size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
