import { Grid } from "@mui/material"
import ProductCard from "./ProductCard"

export const ListProducts = () => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={10} sm={6} md={4} lg={3} sx={{ margin: "2rem 1rem" }}>
        <ProductCard />
      </Grid>
    </Grid>
  )
}