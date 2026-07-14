import { ArrowIcon } from './icons'

export default function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-10">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Parlez-nous de votre projet.
          </h2>
          <p className="mt-2 text-white/60">Notre équipe est prête à le réaliser.</p>
        </div>

        <a
          href="mailto:info@constructionunik.ca"
          className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink transition hover:bg-gold-light"
        >
          Demander une soumission
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
