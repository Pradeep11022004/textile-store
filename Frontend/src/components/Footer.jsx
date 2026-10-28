import { Link } from 'react-router-dom'
import { Camera, Mail, MapPin, Phone, PlayCircle, Share2 } from 'lucide-react'
import { categories } from '../data/products'
import '../styles/Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__grid">
        <section>
          <Link className="brand brand--footer" to="/">
            <span className="brand__mark" aria-hidden="true">
              AT
            </span>
            <strong>Aarohi Textiles</strong>
          </Link>
          <p>
            A sample storefront for mill-fresh cotton, silk, linen, and printed
            fabrics sold by the metre. Built for the Textile Store frontend
            assignment.
          </p>
        </section>

        <section>
          <h2>Quick links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/products?category=Silk">Festive silks</Link>
            </li>
            <li>
              <Link to="/products?q=cotton">Cotton collection</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/products?category=${encodeURIComponent(category)}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Visit the sample store</h2>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              42, T. Nagar Fabric Market, Chennai 600017 (sample)
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+914440001200">+91 44 4000 1200</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:hello@aarohitextiles.example">
                hello@aarohitextiles.example
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Camera size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Share2 size={18} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
              <PlayCircle size={18} />
            </a>
          </div>
        </section>
      </div>
      <p className="footer__copy">
        © {year} Aarohi Textiles. Sample catalogue for demonstration — no real
        purchases are processed.
      </p>
    </footer>
  )
}

export default Footer
