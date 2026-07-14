const COLUMNS = [
  {
    title: 'Navigation',
    links: ['Réalisations', 'Plans', 'Projets à vendre', 'Services', 'À propos', 'Contact'],
  },
  {
    title: 'Coordonnées',
    links: ['info@constructionunik.ca', '1 800 000-0000', 'Québec, Canada'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal py-12 text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-3 lg:px-10">
        <div>
          <img src="/logoUnik.png" alt="Construction Unik inc." className="h-16 w-auto" />
          <p className="mt-3 max-w-xs text-sm">
            Construction résidentielle clé en main depuis 20 ans.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-white/40 lg:px-10">
        © {new Date().getFullYear()} Construction Unik. Tous droits réservés.
      </div>
    </footer>
  )
}
