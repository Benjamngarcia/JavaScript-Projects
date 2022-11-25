import { Grid, Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getProductByUrl } from '../../api/products'
import { Description } from '../../components/Product/Description'
import { MainProduct } from '../../components/Product/MainProduct'
import BasicLayout from '../../layouts/BasicLayout'

export default function Product() {
  const [product, setProduct] = useState(null)
  console.log("🚀 ~ file: [product].js ~ line 9 ~ Product ~ product", product)
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      if (query.product) {
        const response = await getProductByUrl(query.product);
        setProduct(response)
      }
    })();
  }, [query]);

  if (!product) return null;

  return (
    <BasicLayout>
      <Box
        component="main"
        sx={{
          margin: "6rem auto",
          width: { xs: "80%", sm: "50%" }
        }}
      >
        <Grid container>
          <MainProduct product={product} />
        </Grid>
        <Description product={product} />
      </Box>
    </BasicLayout>
  )
}
