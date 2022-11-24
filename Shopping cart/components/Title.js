import { Box, Typography, Stack } from '@mui/material';
import Logo from './Logo';

export const Title = () => {
  return (
    <Box
      component="main"
      sx={{
        marginTop: 9,
        textAlign: "center"
      }}
    >
      <Typography className="title-name-main" variant="h3" sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "auto" }}>
        Ben
        <LogoTitle className="animated-icon-title"/>
        Store
      </Typography>
    </Box>
  )
}

function LogoTitle() {
  return (
    <Stack sx={{
      margin: "auto 10px"
    }}>
      <Logo width={80} height={80} />
    </Stack>
  )
}