export const FALLBACK_IMAGE = '/fabric-fallback.svg'

export const categories = [
  'Cotton',
  'Silk',
  'Linen',
  'Denim',
  'Polyester',
  'Printed Fabrics',
]

export const products = [
  {
    id: 1,
    name: 'Premium Cotton Fabric',
    material: '100% Cotton',
    category: 'Cotton',
    pricePerMetre: 250,
    image:
      'https://images.unsplash.com/photo-1620799140188-3b2a7ba6fbb3?auto=format&fit=crop&w=1200&q=80',
    description:
      'Soft, breathable mill-finished cotton suited for everyday shirts, kurtas, and home linens. The weave is even, easy to cut, and takes dye with a clean finish.',
    stockQuantity: 48,
    width: '44 inches',
    color: 'Natural Ivory',
    careInstructions: 'Machine wash cold. Tumble dry low. Warm iron.',
  },
  {
    id: 2,
    name: 'Kanchipuram Silk Fabric',
    material: 'Pure Silk',
    category: 'Silk',
    pricePerMetre: 1850,
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80',
    description:
      'Handloom-inspired Kanchipuram silk with a rich drape and luminous sheen. Ideal for bridal and festive ensembles that need structure and traditional presence.',
    stockQuantity: 9,
    width: '45 inches',
    color: 'Temple Gold',
    careInstructions: 'Dry clean only. Store in muslin, away from direct sunlight.',
  },
  {
    id: 3,
    name: 'Pure Linen Fabric',
    material: '100% Linen',
    category: 'Linen',
    pricePerMetre: 620,
    image:
      'https://images.unsplash.com/photo-1523381294919-8f0de4c3df0a?auto=format&fit=crop&w=1200&q=80',
    description:
      'Airy European-style linen with a lived-in texture that softens after every wash. Recommended for summer shirts, palazzos, and light drapes.',
    stockQuantity: 22,
    width: '58 inches',
    color: 'Sand Beige',
    careInstructions: 'Gentle wash. Line dry. Steam to relax creases.',
  },
  {
    id: 4,
    name: 'Denim Fabric',
    material: 'Cotton Denim',
    category: 'Denim',
    pricePerMetre: 390,
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Medium-weight indigo denim with a firm hand and reliable recovery. Suitable for jeans, jackets, tote bags, and structured skirts.',
    stockQuantity: 35,
    width: '56 inches',
    color: 'Classic Indigo',
    careInstructions: 'Wash inside out in cold water. Avoid bleach.',
  },
  {
    id: 5,
    name: 'Polyester Fabric',
    material: 'Polyester',
    category: 'Polyester',
    pricePerMetre: 180,
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Wrinkle-resistant polyester with a smooth surface and consistent colour. A practical choice for uniforms, linings, and high-wear garments.',
    stockQuantity: 60,
    width: '60 inches',
    color: 'Slate Grey',
    careInstructions: 'Machine wash warm. Low iron if needed.',
  },
  {
    id: 6,
    name: 'Floral Printed Cotton',
    material: 'Printed Cotton',
    category: 'Printed Fabrics',
    pricePerMetre: 320,
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    description:
      'Fine cotton voile with a botanical print designed for dresses, dupattas, and light kurtis. Colours stay crisp after washing.',
    stockQuantity: 14,
    width: '44 inches',
    color: 'Blush Floral',
    careInstructions: 'Cold wash separately. Do not wring. Iron on reverse.',
  },
  {
    id: 7,
    name: 'Plain White Cotton',
    material: '100% Cotton',
    category: 'Cotton',
    pricePerMetre: 165,
    image:
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=80',
    description:
      'Clean, undyed white cotton poplin for shirts, school uniforms, and embroidery bases. Smooth surface and a tight, even weave.',
    stockQuantity: 0,
    width: '44 inches',
    color: 'Optical White',
    careInstructions: 'Machine wash. Use a colour-safe brightener if desired.',
  },
  {
    id: 8,
    name: 'Velvet Fabric',
    material: 'Velvet',
    category: 'Silk',
    pricePerMetre: 980,
    image:
      'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Plush cut-pile velvet with a deep pile and evening-wear drape. Use for blazers, festive lehengas, and statement cushions.',
    stockQuantity: 7,
    width: '54 inches',
    color: 'Maroon Wine',
    careInstructions: 'Dry clean. Brush pile gently in one direction.',
  },
  {
    id: 9,
    name: 'Georgette Fabric',
    material: 'Georgette',
    category: 'Polyester',
    pricePerMetre: 410,
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80',
    description:
      'Lightweight crepe georgette with a grainy texture and fluid fall. Popular for sarees, anarkalis, and layered dupattas.',
    stockQuantity: 18,
    width: '44 inches',
    color: 'Ruby Red',
    careInstructions: 'Gentle hand wash or dry clean. Steam, do not press hard.',
  },
  {
    id: 10,
    name: 'Checked Shirting Fabric',
    material: 'Cotton Blend',
    category: 'Cotton',
    pricePerMetre: 275,
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Yarn-dyed checks for formal and casual shirts. Stable grain, low shrinkage, and a neat office-ready finish.',
    stockQuantity: 26,
    width: '44 inches',
    color: 'Navy Check',
    careInstructions: 'Machine wash cold. Iron while slightly damp.',
  },
  {
    id: 11,
    name: 'Handloom Linen Mix',
    material: 'Linen Cotton',
    category: 'Linen',
    pricePerMetre: 540,
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    description:
      'A breathable linen-cotton mill mix with a subtle slub. Comfortable for trousers, jackets, and contemporary kurtas.',
    stockQuantity: 11,
    width: '58 inches',
    color: 'Olive Khaki',
    careInstructions: 'Gentle cycle. Line dry. Warm iron.',
  },
  {
    id: 12,
    name: 'Block Printed Cambric',
    material: 'Cotton Cambric',
    category: 'Printed Fabrics',
    pricePerMetre: 345,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    description:
      'Soft cambric with traditional block-print motifs. Lightweight enough for summer dresses, quilts, and craft projects.',
    stockQuantity: 5,
    width: '44 inches',
    color: 'Indigo Print',
    careInstructions: 'First wash separately. Cold water. Iron on reverse.',
  },
]

export function getStockStatus(stockQuantity) {
  if (!stockQuantity || stockQuantity <= 0) return 'Out of Stock'
  if (stockQuantity <= 10) return 'Low Stock'
  return 'In Stock'
}

export function getStockTone(stockQuantity) {
  if (!stockQuantity || stockQuantity <= 0) return 'out'
  if (stockQuantity <= 10) return 'low'
  return 'in'
}

export function formatPrice(pricePerMetre) {
  return `₹${Number(pricePerMetre).toLocaleString('en-IN')}/metre`
}

export function getProductById(id) {
  return products.find((product) => String(product.id) === String(id))
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return []
  return products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .concat(products.filter((item) => item.id !== product.id && item.category !== product.category))
    .slice(0, limit)
}

export function searchProducts(list, query) {
  const term = query.trim().toLowerCase()
  if (!term) return list
  return list.filter((product) => {
    return (
      product.name.toLowerCase().includes(term) ||
      product.material.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.color.toLowerCase().includes(term)
    )
  })
}
