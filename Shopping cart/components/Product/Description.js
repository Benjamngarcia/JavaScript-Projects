import { Typography, Box } from "@mui/material"

export const Description = (props) => {
  const { product } = props
  return (
    <Box
      component="article"
      sx={{
        marginTop: "2rem"
      }}
    >
      <Typography variant="h6">
        About this article
      </Typography>
      <Typography variant="body1">
        {product.description}
      </Typography>
    </Box>
  )
}