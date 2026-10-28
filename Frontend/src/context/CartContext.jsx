/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [notice, setNotice] = useState('')

  const addToCart = useCallback((product, metres) => {
    const quantity = Number(metres)

    if (!product) {
      const message = 'This product is unavailable.'
      setNotice(message)
      return { ok: false, message }
    }

    if (product.stockQuantity <= 0) {
      const message = 'This fabric is currently out of stock.'
      setNotice(message)
      return { ok: false, message }
    }

    if (!Number.isFinite(quantity) || quantity < 1) {
      const message = 'Please choose at least 1 metre.'
      setNotice(message)
      return { ok: false, message }
    }

    const existing = items.find((item) => item.id === product.id)
    const currentQty = existing ? existing.metres : 0
    const nextQty = currentQty + quantity

    if (nextQty > product.stockQuantity) {
      const remaining = product.stockQuantity - currentQty
      const message =
        remaining > 0
          ? `Only ${remaining} metre${remaining === 1 ? '' : 's'} remaining in stock.`
          : 'You already have the available stock in your cart.'
      setNotice(message)
      return { ok: false, message }
    }

    setItems((previous) => {
      if (existing) {
        return previous.map((item) =>
          item.id === product.id ? { ...item, metres: nextQty } : item,
        )
      }

      return [
        ...previous,
        {
          id: product.id,
          name: product.name,
          metres: quantity,
          pricePerMetre: product.pricePerMetre,
          image: product.image,
          stockQuantity: product.stockQuantity,
        },
      ]
    })

    const message = `${quantity} metre${quantity === 1 ? '' : 's'} of ${product.name} added to your sample cart. No order has been placed.`
    setNotice(message)
    return { ok: true, message }
  }, [items])

  const removeFromCart = useCallback((productId) => {
    setItems((previous) => previous.filter((item) => item.id !== productId))
  }, [])

  const clearNotice = useCallback(() => setNotice(''), [])

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.metres, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.metres * item.pricePerMetre,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      notice,
      clearNotice,
    }
  }, [items, notice, addToCart, removeFromCart, clearNotice])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
