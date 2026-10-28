import { Link } from 'react-router-dom'
import { IndianRupee, Layers, ShieldCheck, Warehouse } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'
import '../styles/Home.css'

const categoryImages = {
  Cotton:
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80',
  Silk: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80',
  Linen:
    'https://images.unsplash.com/photo-1523381294919-8f0de4c3df0a?auto=format&fit=crop&w=700&q=80',
  Denim:
    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80',
  Polyester:
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=80',
  'Printed Fabrics':
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
}

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    text: 'Mill-checked weaves, even dyeing, and fabrics chosen for drape and durability.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Prices',
    text: 'Transparent per-metre pricing with no hidden cutting charges in this catalogue.',
  },
  {
    icon: Layers,
    title: 'Wide Fabric Selection',
    text: 'Cotton, silk, linen, denim, polyester, and printed collections in one place.',
  },
  {
    icon: Warehouse,
    title: 'Reliable Stock Information',
    text: 'Live sample stock badges so you can plan metres before visiting the counter.',
  },
]

function Home() {
  const featured = products.filter((product) => product.stockQuantity > 0).slice(0, 4)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Chennai · Since a sample season</p>
          <h1>Discover the Beauty of Premium Fabrics</h1>
          <p>
            Shop mill-fresh cottons, festive silks, breathable linens, and printed
            cambrics by the metre. Aarohi Textiles is a frontend catalogue built
            for a real-world Indian fabric store experience.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/products">
              Shop Now
            </Link>
            <Link className="btn btn--light" to="/products?category=Silk">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Featured fabric categories</h2>
          <p>Jump straight into the weave that suits your next garment.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              className="category-card"
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
            >
              <img src={categoryImages[category]} alt={`${category} fabrics`} />
              <span>{category}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Featured products</h2>
          <Link to="/products">View all fabrics</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo">
        <div>
          <p className="eyebrow">Festive edit</p>
          <h2>Seasonal textile collections for weddings and harvest festivals</h2>
          <p>
            Kanchipuram silks, velvet evening weaves, and jewel-tone georgettes
            are ready to be cut by the metre for the coming season.
          </p>
          <Link className="btn btn--primary" to="/products?category=Silk">
            Browse festive fabrics
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Why shops choose Aarohi</h2>
        </div>
        <div className="benefits">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <benefit.icon size={22} />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
