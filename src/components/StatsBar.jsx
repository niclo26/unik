import { HouseIcon, HouseKeyIcon, ShieldIcon, PersonIcon } from './icons'

const STATS = [
  { icon: HouseIcon, value: '20 ANS', label: "D'expérience" },
  { icon: HouseKeyIcon, value: '+260', label: 'Constructions' },
  { icon: ShieldIcon, value: 'Garantie GCR', label: "Tranquillité d'esprit" },
  { icon: PersonIcon, value: 'Accompagnement', label: 'De A à Z' },
]

export default function StatsBar() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-12 lg:grid-cols-4 lg:gap-y-0 lg:px-10">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={value} className="flex items-center gap-4">
            <Icon className="h-9 w-9 shrink-0 text-gold" />
            <div>
              <p className="font-display text-base font-semibold uppercase tracking-wide text-ink">
                {value}
              </p>
              <p className="text-sm text-ink/60">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
