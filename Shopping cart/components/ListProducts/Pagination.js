import { Pagination, Stack } from '@mui/material';

export function Paginacion({ pagina, setPagina, maximo }) {

  const handleChangePage = (event, value) => {
    setPagina(value)
  }

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 'auto',
      }}
    >
      <Pagination count={maximo} page={pagina} variant="outlined" shape="rounded" size="large" onChange={handleChangePage} />
    </Stack>
  )
}