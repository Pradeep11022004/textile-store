import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import {
  categories,
  products,
  searchProducts,
} from '../data/products'
import '../styles/ProductList.css'

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('featured')

  const query = searchParams.get('q') ?? ''
  const category = searchParams.get('category') ?? 'all'

  const visibleProducts = useMemo(() => {
    let list = [...products]

    if (category !== 'all') {
      list = list.filter((product) => product.category === category)
    }

    list = searchProducts(list, query)

    if (sort === 'low') {
      list.sort((a, b) => a.pricePerMetre - b.pricePerMetre)
    } else if (sort === 'high') {
      list.sort((a, b) => b.pricePerMetre - a.pricePerMetre)
    }

    return list
  }, [category, query, sort])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all') {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  return (
    <div className="catalogue">
      <header className="catalogue__intro">
        <p className="eyebrow">Fabric catalogue</p>
        <h1>All products</h1>
        <p>
          Filter by weave, search by name or material, and sort by price. Stock
          badges are calculated from sample quantities.
        </p>
      </header>

      <form className="filters" onSubmit={(event) => event.preventDefault()}>
        <label>
          Search
          <input
            type="search"
            value={query}
            placeholder="Name or material"
            onChange={(event) => updateParam('q', event.target.value)}
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(event) => updateParam('category', event.target.value)}
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sort by price
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
          </select>
        </label>
      </form>

      <p className="catalogue__count">
        Showing {visibleProducts.length} of {products.length} fabrics
      </p>

      {visibleProducts.length === 0 ? (
        <div className="empty-state" role="status">
          <h2>No fabrics match your filters</h2>
          <p>Try another name, material, or category. Sample data is local only.</p>
        </div>
      ) : (
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
