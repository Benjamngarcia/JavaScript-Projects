import { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { getProductByUrl } from "../api/products";
import useCart from "../hooks/useCart";
import SummaryCart from "../components/Cart/SummaryCart";

export default function Cart() {
  const { getProductCart, removeProductCart } = useCart();
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const productsCart = getProductCart();
    console.log("🚀 ~ file: cart.js:13 ~ useEffect ~ productsCart", productsCart)
    setProducts(productsCart)
  }, [])

  return !products ? <EmptyCart /> : <FullCart products={products} removeProductCart={removeProductCart}/>;
}

function EmptyCart() {
  return (
    <BasicLayout className="empty-cart">
      <h2>No hay productos en el carrito</h2>
    </BasicLayout>
  );
}

function FullCart(props) {
  const { products, removeProductCart } = props;
  const [productsData, setProductsData] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        const data = await getProductByUrl(product);
        productsTemp.push(data);
      }
      setProductsData(productsTemp);
    })();
    setReloadCart(false);
  }, [reloadCart]);

  const removeProduct = (product) => {
    setProductsData(removeProductCart(product));
    setReloadCart(true);
  };

  if (!productsData) return null;

  return (
    <BasicLayout className="empty-cart">
      <SummaryCart
        products={productsData}
        reloadCart={reloadCart}
        setReloadCart={setReloadCart}
        removeProduct = {removeProduct}
      />
    </BasicLayout>
  );
}