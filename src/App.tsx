import { useState } from 'react'

type IconName =
  | 'arrow'
  | 'bag'
  | 'heart'
  | 'menu'
  | 'search'
  | 'sparkle'
  | 'truck'
  | 'user'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    truck: (
      <>
        <path d="M3 6h11v11H3z" />
        <path d="M14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      {paths[name]}
    </svg>
  )
}

const categories = [
  {
    name: 'Mujer',
    note: 'Nueva temporada',
    image:
      'https://images.unsplash.com/photo-1779406166699-662a041a12a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900',
  },
  {
    name: 'Hogar',
    note: 'Diseño que inspira',
    image:
      'https://images.unsplash.com/photo-1761330439316-72229b71798f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900',
  },
  {
    name: 'Belleza',
    note: 'Rituales cotidianos',
    image:
      'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900',
  },
]

const products = [
  {
    id: 1,
    category: 'Accesorios',
    name: 'Bolso Atelier',
    price: '$3,290',
    badge: 'Nuevo',
    image:
      'https://images.unsplash.com/photo-1575403538007-acb790100421?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700',
  },
  {
    id: 2,
    category: 'Calzado',
    name: 'Tenis Siena',
    price: '$2,190',
    badge: '',
    image:
      'https://images.unsplash.com/photo-1700178310305-0e05d7930f9f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700',
  },
  {
    id: 3,
    category: 'Joyería y relojes',
    name: 'Reloj Élan',
    price: '$4,890',
    badge: 'Exclusivo',
    image:
      'https://images.unsplash.com/photo-1694630097760-ec23494ae0d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700',
  },
  {
    id: 4,
    category: 'Tecnología',
    name: 'Audífonos Studio',
    price: '$1,790',
    badge: '',
    image:
      'https://images.unsplash.com/photo-1702047135360-e549c2e1f7df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=700',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <p>Envío gratis en compras mayores a $1,499</p>
        <button type="button" onClick={() => scrollTo('beneficios')}>
          Conoce más <Icon name="arrow" size={15} />
        </button>
      </div>

      <header className="header">
        <div className="header-main">
          <button
            aria-label="Abrir menú"
            className="icon-button mobile-menu"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" />
          </button>
          <button className="wordmark" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            LÚMINA
            <span>DEPARTAMENTAL</span>
          </button>

          <div className={`search ${searchOpen ? 'search-open' : ''}`}>
            <Icon name="search" size={19} />
            <input aria-label="Buscar productos" placeholder="¿Qué estás buscando?" />
          </div>

          <div className="header-actions">
            <button
              aria-label="Buscar"
              className="icon-button mobile-search"
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Icon name="search" />
            </button>
            <button aria-label="Mi cuenta" className="icon-button account-button" type="button">
              <Icon name="user" />
              <span>Mi cuenta</span>
            </button>
            <button aria-label={`Bolsa con ${cartCount} productos`} className="icon-button cart-button" type="button">
              <Icon name="bag" />
              <span>Bolsa</span>
              <b>{cartCount}</b>
            </button>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegación principal">
          {['Mujer', 'Hombre', 'Belleza', 'Hogar', 'Tecnología', 'Niños'].map((item) => (
            <button key={item} type="button" onClick={() => scrollTo(item === 'Hogar' ? 'hogar' : 'categorias')}>
              {item}
            </button>
          ))}
          <button className="sale-link" type="button" onClick={() => scrollTo('productos')}>
            Rebajas
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Edición primavera · 2025</p>
            <h1>La belleza de lo <em>esencial</em></h1>
            <p className="hero-text">
              Una curaduría de piezas que transforman lo cotidiano en algo extraordinario.
            </p>
            <button className="primary-button" type="button" onClick={() => scrollTo('productos')}>
              Descubrir colección <Icon name="arrow" />
            </button>
            <p className="hero-index">01 / 03</p>
          </div>
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1779406167603-d0afe0a4cdd7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1400"
              alt="Mujer con traje beige en una composición editorial"
            />
            <span className="hero-stamp">
              <Icon name="sparkle" size={23} />
              NUEVA
              <br />
              EDICIÓN
            </span>
          </div>
        </section>

        <section className="section categories-section" id="categorias">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explora</p>
              <h2>Un universo para ti</h2>
            </div>
            <button className="text-link" type="button" onClick={() => scrollTo('productos')}>
              Ver todos los departamentos <Icon name="arrow" />
            </button>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <button
                className={`category-card category-${index + 1}`}
                key={category.name}
                type="button"
                onClick={() => scrollTo(category.name === 'Hogar' ? 'hogar' : 'productos')}
              >
                <img src={category.image} alt="" />
                <span className="category-overlay" />
                <span className="category-content">
                  <small>{category.note}</small>
                  <strong>{category.name}</strong>
                  <span className="round-arrow"><Icon name="arrow" /></span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section product-section" id="productos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">La selección</p>
              <h2>Objetos de deseo</h2>
            </div>
            <p className="section-intro">
              Piezas elegidas por su diseño, calidad y capacidad de acompañarte por mucho tiempo.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <button
                    aria-label={`Agregar ${product.name} a favoritos`}
                    className={`favorite-button ${favorites.includes(product.id) ? 'is-favorite' : ''}`}
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon name="heart" />
                  </button>
                  <button className="quick-add" type="button" onClick={() => setCartCount((count) => count + 1)}>
                    Agregar a la bolsa
                  </button>
                </div>
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="home-feature" id="hogar">
          <div className="home-image">
            <img
              src="https://images.unsplash.com/photo-1579101324336-b71150dc9378?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1300"
              alt="Sillón beige en un interior sereno"
            />
          </div>
          <div className="home-copy">
            <p className="eyebrow">Casa Lúmina</p>
            <h2>Espacios que hablan de ti</h2>
            <p>
              Formas honestas, texturas naturales y objetos con intención para crear un hogar tan único como tú.
            </p>
            <button className="outline-button" type="button" onClick={() => scrollTo('productos')}>
              Explorar hogar <Icon name="arrow" />
            </button>
          </div>
        </section>

        <section className="benefits" id="beneficios">
          <div>
            <Icon name="truck" size={28} />
            <span><strong>Envíos a todo México</strong><small>Gratis en compras mayores a $1,499</small></span>
          </div>
          <div>
            <Icon name="sparkle" size={28} />
            <span><strong>Selección excepcional</strong><small>Marcas y piezas que vale la pena descubrir</small></span>
          </div>
          <div>
            <Icon name="heart" size={28} />
            <span><strong>Compra con confianza</strong><small>Devoluciones sencillas durante 30 días</small></span>
          </div>
        </section>
      </main>

      <footer>
        <button className="wordmark footer-logo" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          LÚMINA <span>DEPARTAMENTAL</span>
        </button>
        <p>Una nueva forma de encontrar todo lo que te inspira.</p>
        <p className="copyright">© 2025 Lúmina Departamental</p>
      </footer>
    </div>
  )
}
