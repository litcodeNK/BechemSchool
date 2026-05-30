export default function YoutubeBg({ id }) {
  return (
    <div className="yt-hero-bg">
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        title=""
        aria-hidden="true"
      />
    </div>
  )
}
