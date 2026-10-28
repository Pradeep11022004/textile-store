import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ChevronDown, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { categories, formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'
import '../styles/Navbar.css'

function Navbar() {
  const { itemCount, items, subtotal, removeFromCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const categoryRef = useRef(null)
  const cartRef = useRef(null)
  const urlQuery = searchParams.get('q') ?? ''

  const closeOverlays = () => {
    setMenuOpen(false)
    setCategoriesOpen(false)
    setCartOpen(false)
  }

  useEffect(() => {
    const onPointerDown = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoriesOpen(false)
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    const term = new FormData(event.currentTarget).get('q')?.toString().trim() ?? ''
    closeOverlays()
    navigate(term ? `/products?q=${encodeURIComponent(term)}` : '/products')
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link className="brand" to="/" aria-label="Aarohi Textiles home" onClick={closeOverlays}>
          <span className="brand__mark" aria-hidden="true">
            AT
          </span>
          <span>
            <strong>Aarohi Textiles</strong>
            <small>Premium fabrics by the metre</small>
          </span>
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">Toggle menu</span>
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/" end onClick={closeOverlays}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={closeOverlays}>
            All Products
          </NavLink>

          <div className="navbar__dropdown" ref={categoryRef}>
            <button
              type="button"
              className={categoriesOpen ? 'is-active' : ''}
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
              onClick={() => setCategoriesOpen((open) => !open)}
            >
              Categories
              <ChevronDown size={16} />
            </button>
            {categoriesOpen ? (
              <div className="navbar__menu" role="menu">
                {categories.map((category) => (
                  <Link
                    key={category}
                    role="menuitem"
                    to={`/products?category=${encodeURIComponent(category)}`}
                    onClick={closeOverlays}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <form className="navbar__search" onSubmit={handleSearch} role="search">
            <label className="sr-only" htmlFor="site-search">
              Search fabrics
            </label>
            <Search size={16} aria-hidden="true" />
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search fabrics or materials"
              key={`${location.pathname}${location.search}`}
              defaultValue={urlQuery}
            />
          </form>
        </nav>

        <div className="navbar__cart" ref={cartRef}>
          <button
            type="button"
            className="cart-button"
            aria-expanded={cartOpen}
            onClick={() => setCartOpen((open) => !open)}
          >
            <ShoppingBag size={20} />
            <span className="sr-only">Sample cart</span>
            <span className="cart-button__count">{itemCount}</span>
          </button>

          {cartOpen ? (
            <div className="cart-panel" role="dialog" aria-label="Sample cart">
              <h2>Sample cart</h2>
              {items.length === 0 ? (
                <p>Your cart is empty. Add metres from a product page to preview totals.</p>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <div>
                        <strong>{item.name}</strong>
                        <span>
                          {item.metres} m · {formatPrice(item.pricePerMetre)}
                        </span>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="cart-panel__total">
                Sample total:{' '}
                <strong>₹{subtotal.toLocaleString('en-IN')}</strong>
              </p>
              <p className="cart-panel__note">
                This is a frontend preview only. Checkout is not available yet.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Navbar
