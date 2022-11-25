import {Card, CardContent, CardMedia, CardActionArea, Typography } from '@mui/material';

const ProductCard = (props) => {
  const { product } = props

  return (
    <Card sx={{height: "100%"}}>
      <CardActionArea href={`/product/${product.id}`}>
        <CardMedia
          component="img"
          height="200px"
          image={product.image}
          alt={product.title}
          sx={{  objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textOverflow: "ellipsis"}}>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard