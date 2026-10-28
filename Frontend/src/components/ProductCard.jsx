import { Link } from 'react-router-dom'
import { FALLBACK_IMAGE, formatPrice, getStockStatus, getStockTone } from '../data/products'

function ProductCard({ product }) {
  const status = getStockStatus(product.stockQuantity)
  const tone = getStockTone(product.stockQuantity)

  return (
    <article className="product-card">
      <Link className="product-card__media" to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={`${product.name} in ${product.color}`}
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = FALLBACK_IMAGE
          }}
        />
        <span className={`stock-badge stock-badge--${tone}`}>{status}</span>
      </Link>
      <div className="product-card__body">
        <p className="product-card__material">{product.material}</p>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-card__price">{formatPrice(product.pricePerMetre)}</p>
        <Link className="btn btn--ghost" to={`/products/${product.id}`}>
          View Details
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
