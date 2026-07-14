import { HouseIcon, PersonIcon, PlansIcon, ArrowIcon, StarIcon, GoogleLogo } from './icons'

const STEPS = [
  {
    number: '01',
    icon: PersonIcon,
    title: 'Rencontre',
    description: 'On vous écoute et on comprend vos besoins.',
  },
  {
    number: '02',
    icon: HouseIcon,
    title: 'Plans',
    description: 'Conception sur mesure adaptée à votre projet.',
  },
  {
    number: '03',
    icon: PlansIcon,
    title: 'Construction',
    description: 'Réalisation rigoureuse par notre équipe qualifiée.',
  },
  {
    number: '04',
    icon: PersonIcon,
    title: 'Livraison',
    description: 'Remise des clés et suivi après livraison.',
  },
]

export default function Process() {
  return (
    <section className="bg-ink py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-wide sm:text-3xl">
            Notre processus
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-0">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-start gap-3 pr-4">
                <step.icon className="h-8 w-8 text-gold" />
                <p className="text-xs font-semibold tracking-widest text-gold">{step.number}</p>
                <p className="font-display text-sm font-semibold uppercase tracking-wide">
                  {step.title}
                </p>
                <p className="text-sm text-white/60">{step.description}</p>

                {i < STEPS.length - 1 && (
                  <ArrowIcon className="absolute right-0 top-2 hidden h-4 w-4 -translate-y-1/2 text-white/30 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold sm:text-2xl">
            Plus de 200 clients
            <br />
            nous ont fait confiance
          </h3>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-semibold">4,9</span>
            <span className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
          </div>
          <p className="mt-1 text-sm text-white/60">Basé sur plus de 80 avis Google</p>

          <blockquote className="mt-6 max-w-md text-white/80">
            « Une expérience exceptionnelle du début à la fin. Une équipe professionnelle et à
            l'écoute de nos besoins. »
            <footer className="mt-3 text-sm text-white/50">— Famille Gauthier, Québec</footer>
          </blockquote>

          <div className="mt-8 flex items-center gap-3">
            <GoogleLogo className="h-6" />
            <a
              href="#avis"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-gold"
            >
              Voir tous les avis
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
