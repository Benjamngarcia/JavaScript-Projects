import { useEffect, useState } from 'react'
import { Grid, Box, CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import { getProductByUrl } from '../../api/products'
import { Description } from '../../components/Product/Description'
import { MainProduct } from '../../components/Product/MainProduct'
import BasicLayout from '../../layouts/BasicLayout'

export default function Product() {
  const [product, setProduct] = useState(null)
  const [loadingProduct, setLoadingProduct] = useState(false)
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      setLoadingProduct(true)
      if (query.product) {
        const response = await getProductByUrl(query.product);
        setProduct(response)
      }
      setLoadingProduct(false)
    })();
  }, [query]);

  if (!product) return null;

  return (
    <BasicLayout>
      {
        loadingProduct ? (
          <CircularProgress size={80} sx={{ display: "flex", margin: "5rem auto" }} />
        ) : (
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
        )
      }
    </BasicLayout>
  )
}
