import { ArrowIcon } from './icons'
import forsale from '../assets/forsale.jpg'

const CARDS = [
  {
    id: 'plans',
    title: 'Nos plans',
    description: 'Plus de 50 plans personnalisables selon vos besoins.',
    linkLabel: 'Voir les plans',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'projets',
    title: 'Projets à vendre',
    description: 'Maisons et terrains disponibles dans des secteurs recherchés.',
    linkLabel: 'Voir les projets',
    image: forsale,
  },
  {
    id: 'services',
    title: 'Nos services',
    description: 'Une gamme complète de services pour vous accompagner.',
    linkLabel: 'Découvrir nos services',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
  },
]

export default function FeatureCards() {
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-3 lg:px-10">
        {CARDS.map((card) => (
          <a
            key={card.id}
            id={card.id}
            href={`#${card.id}`}
            className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-sm sm:aspect-[3/4]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="relative p-6 text-white">
              <h3 className="font-display text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-white/80">{card.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                {card.linkLabel}
                <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
