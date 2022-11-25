import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import {getAllProductsApi} from "../../api/products"
import ProductCard from "./ProductCard"
import { Paginacion } from "./Pagination"

export const ListProducts = () => {
  const [products, setProducts] = useState([])
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(7)

  useEffect(() => {
    (async () => {
      const response = await getAllProductsApi()
      setProducts(response)
    })()
  }, [])

  const maximo = Math.round(products.length / porPagina)

  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        {products.slice(
          (pagina - 1) * porPagina,
          (pagina - 1) * porPagina + porPagina
        ).map((product) => {
          return (
            <Grid item key={product.id} xs={10} sm={6} md={4} lg={3} sx={{ margin: "2rem 1rem" }}>
              <ProductCard product={product} />
            </Grid>
          )
        })}
      </Grid>
      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </>
  )
}

