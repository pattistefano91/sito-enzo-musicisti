'use client'

import { useState } from 'react'
import { type MediaVideo } from '@/data/media'

// YouTube viene contattato solo dopo il clic: niente cookie né richieste a Google al caricamento
export function VideoPlayer({ video }: { video: MediaVideo }) {
  const [playing, setPlaying] = useState(false)

  const params = new URLSearchParams({ autoplay: '1' })
  if (video.start) params.set('start', String(video.start))

  return (
    <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-elevated)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?${params}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Riproduci il video: ${video.title}`}
          className="group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
        >
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('/images/video/${video.youtubeId}.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-black shadow-lg group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-7 h-7 translate-x-0.5" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
          <span className="absolute bottom-2 left-3 right-3 text-left text-[0.65rem] text-white/80">
            Premendo play il video viene caricato da YouTube.
          </span>
        </button>
      )}
    </div>
  )
}
