import { useRef, useState, useEffect } from 'react'

/*
  Source priority:
  1. /hero-video.mp4   — drop your own school video in public/ to override
  2-4. Mixkit free CDN — no attribution required, browser picks first that loads
*/
const CDN_SOURCES = [
  'https://assets.mixkit.co/videos/preview/mixkit-group-of-students-in-a-library-4822-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-elementary-class-with-teacher-4811-large.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-girl-writing-in-her-notebook-in-class-4826-large.mp4',
]

export default function HeroVideo({ onPausedChange }) {
  const videoRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const [srcIndex, setSrcIndex] = useState(0)

  /* Kick off play as soon as the browser has enough data */
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const tryPlay = () => v.play().catch(() => {})
    v.addEventListener('canplay', tryPlay, { once: true })
    return () => v.removeEventListener('canplay', tryPlay)
  }, [srcIndex])

  /* When a source errors, advance to the next CDN URL */
  const handleError = () => {
    setSrcIndex(i => Math.min(i + 1, CDN_SOURCES.length - 1))
  }

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPaused(false); onPausedChange?.(false) }
    else          { v.pause(); setPaused(true);  onPausedChange?.(true)  }
  }

  return (
    <>
      <video
        key={srcIndex}
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleError}
      >
        {/* Try local file first, then cycle through CDN fallbacks */}
        {srcIndex === 0 && <source src="/hero-video.mp4" type="video/mp4" />}
        <source src={CDN_SOURCES[srcIndex]} type="video/mp4" />
      </video>

      <button
        className="hero-pause"
        aria-label={paused ? 'Play' : 'Pause'}
        onClick={toggle}
      >
        {paused ? '▶' : '❚❚'}
      </button>
    </>
  )
}
