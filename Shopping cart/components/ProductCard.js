import {Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

const ProductCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="title product"
          sx={{  objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title product
          </Typography>
          <Typography variant="body1" color="text.secondary">
            $ Price
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard