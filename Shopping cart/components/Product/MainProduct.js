import { Box, Grid, Typography, Rating, Stack, TextField, Button, ButtonGroup } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useCart from "../../hooks/useCart"

export const MainProduct = (props) => {
  const { product } = props
  const { addProductCart } = useCart();

  return (
    <>
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={product.image}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            backgroundColor: "yellow",
            margin: "auto",
            padding: 0
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          width: "100%",
          paddingTop: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          {product.title}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          ${product.price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly />
          <Box>
            <Typography variant="body1" sx={{ml: 2}}>
              {product.rating.rate} out of 5
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body1" sx={{ml: 2}}>
              {product.rating.count} customers ratings
            </Typography>
        </Box>
        <ButtonGroup aria-label="button group">
          <TextField type="number" defaultValue={1} sx={{ borderRadius: 0 }} />
          <Button variant="contained" onClick={() => addProductCart(product.id)} sx={{ borderRadius: 0, fontSize: "13px" }}>
            <AddShoppingCartIcon />  Add to cart
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  )
}
