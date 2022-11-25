import { useState, useMemo, useEffect } from "react"
import { getProductsCart, addProductCart, countProductsCart, removeProductCart } from "../api/cart";
import CartContext from "../context/CartContext"
import "../sass/index.scss"

function MyApp({ Component, pageProps }) {
  const [totalProductsCart, setTotalProductsCart] = useState(0)
  const [reloadCart, setReloadCart] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTotalProductsCart(countProductsCart)
    setReloadCart(false)
  }, [reloadCart])

  const addProduct = (product) => {
    addProductCart(product)
    setReloadCart(true)
  }

  const cartData = useMemo(
    () => ({
      productsCart: totalProductsCart,
      addProductCart: (product) => addProduct(product),
      getProductCart: getProductsCart,
      removeProductCart: removeProductCart,
      removeAllProductCart: () => null
    }),
    [totalProductsCart]
  )

  return (
    <CartContext.Provider value={cartData}>
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
