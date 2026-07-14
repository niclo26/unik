import { ArrowIcon } from './icons'
import real1 from '../assets/real1.png'
import real2 from '../assets/real2.png'
import real3 from '../assets/real3.png'
import real4 from '../assets/real4.png'

const IMAGES = [real1, real2, real3, real4]

export default function Realisations() {
  return (
    <section id="realisations" className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
            Nos réalisations
          </h2>
          <a
            href="#realisations"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/70 transition hover:text-gold sm:inline-flex"
          >
            Voir toutes les réalisations
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {IMAGES.map((src) => (
            <div key={src} className="aspect-[4/3] overflow-hidden rounded-sm bg-slate-dark">
              <img
                src={src}
                alt="Réalisation Construction Unik"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <a
          href="#realisations"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/70 sm:hidden"
        >
          Voir toutes les réalisations
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
