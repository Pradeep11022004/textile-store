import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import {
  FALLBACK_IMAGE,
  formatPrice,
  getProductById,
  getRelatedProducts,
  getStockStatus,
  getStockTone,
} from '../data/products'
import '../styles/ProductDetails.css'

function ProductDetails() {
  const { id } = useParams()
  return <ProductDetailsView key={id} id={id} />
}

function ProductDetailsView({ id }) {
  const product = getProductById(id)
  const related = getRelatedProducts(product)
  const { addToCart, notice } = useCart()
  const [metres, setMetres] = useState(1)
  const [message, setMessage] = useState('')

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product not found</h1>
        <p>
          We could not find a fabric with ID “{id}” in the sample catalogue.
        </p>
        <Link className="btn btn--primary" to="/products">
          Back to products
        </Link>
      </div>
    )
  }

  const status = getStockStatus(product.stockQuantity)
  const tone = getStockTone(product.stockQuantity)
  const outOfStock = product.stockQuantity <= 0
  const maxMetres = Math.max(product.stockQuantity, 1)

  const handleQuantity = (value) => {
    const next = Number(value)
    if (!Number.isFinite(next)) return
    const clamped = Math.min(Math.max(Math.trunc(next), 1), maxMetres)
    setMetres(clamped)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const result = addToCart(product, metres)
    setMessage(result.message)
  }

  return (
    <div className="details">
      <Link className="back-link" to="/products">
        <ArrowLeft size={16} /> Back to products
      </Link>

      <article className="details__layout">
        <div className="details__media">
          <img
            src={product.image}
            alt={`${product.name} shown in ${product.color}`}
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = FALLBACK_IMAGE
            }}
          />
        </div>

        <div className="details__info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="details__price">{formatPrice(product.pricePerMetre)}</p>
          <p className={`stock-badge stock-badge--${tone}`}>{status}</p>
          <p>{product.description}</p>

          <dl className="specs">
            <div>
              <dt>Material</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>Colour</dt>
              <dd>{product.color}</dd>
            </div>
            <div>
              <dt>Width</dt>
              <dd>{product.width}</dd>
            </div>
            <div>
              <dt>Available stock</dt>
              <dd>
                {outOfStock
                  ? '0 metres'
                  : `${product.stockQuantity} metres`}
              </dd>
            </div>
            <div>
              <dt>Care</dt>
              <dd>{product.careInstructions}</dd>
            </div>
          </dl>

          {outOfStock ? (
            <p className="details__alert" role="status">
              This fabric is out of stock. You can browse related weaves below.
            </p>
          ) : (
            <form className="details__cart" onSubmit={handleAdd}>
              <label htmlFor="metres">
                Quantity (metres)
                <input
                  id="metres"
                  type="number"
                  min={1}
                  max={product.stockQuantity}
                  step={1}
                  value={metres}
                  onChange={(event) => handleQuantity(event.target.value)}
                />
              </label>
              <button className="btn btn--primary" type="submit">
                Add to cart
              </button>
            </form>
          )}

          {(message || notice) && (
            <p className="details__notice" role="status">
              {message || notice}
            </p>
          )}
        </div>
      </article>

      <section className="section">
        <div className="section__header">
          <h2>Related products</h2>
        </div>
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
