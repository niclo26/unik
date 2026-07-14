import { ArrowIcon } from './icons'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ink lg:min-h-[720px]">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Maison unifamiliale moderne construite par Construction Unik"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Votre projet
            <br />
            mérite d'être
            <br />
            unique.
          </h1>
          <p className="mt-6 max-w-sm text-lg text-white/75">
            Construction résidentielle clé en main.
          </p>
          <a
            href="#realisations"
            className="mt-10 inline-flex items-center gap-2 rounded-sm border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gold transition hover:bg-gold hover:text-ink"
          >
            Voir nos réalisations
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
