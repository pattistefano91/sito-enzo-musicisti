'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Divider } from '@/components/ui'
import { VIDEOS, PHOTOS } from '@/data/media'

type Tab = 'video' | 'foto'

export function MediaSection() {
  const [activeTab, setActiveTab] = useState<Tab>('video')
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="media" className="py-24 bg-[var(--color-surface-page)]">
      <Container>

        {/* Header */}
        <motion.div
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-12"
        >
          <span className="text-label text-[var(--color-primary)] text-xs tracking-widest">
            Media
          </span>
          <h2 className="text-heading-1 text-[var(--color-text-primary)] mt-2">
            VIDEO &amp; FOTO
          </h2>
          <Divider className="mt-6 w-16 border-[var(--color-primary)] border-t-2" />
        </motion.div>

        {/* Tab switcher */}
        <div className="flex gap-1 mb-10 p-1 bg-[var(--color-surface-elevated)] rounded-[var(--radius-md)] w-fit">
          {(['video', 'foto'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-[var(--radius-sm)] text-label text-sm transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[var(--color-primary)] text-black font-semibold'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {tab === 'video' ? 'Video' : 'Foto'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'video' ? (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' as const }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {VIDEOS.map((v) => (
                <div key={v.id} className="flex flex-col gap-3">
                  <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-surface-elevated)]">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-label text-sm text-[var(--color-text-primary)]">{v.title}</p>
                    <p className="text-caption">{v.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="foto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' as const }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {PHOTOS.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setLightbox(photo.src)}
                  className="group relative aspect-square rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface-elevated)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                >
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${photo.src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                    <span className="text-caption text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                      {photo.caption}
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Foto ingrandita"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' as const }}
              className="max-w-full max-h-full rounded-[var(--radius-lg)] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Chiudi"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
