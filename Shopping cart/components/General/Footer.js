import { Grid, Typography, Box, Button, IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link"

export const Footer = () => {
  return (
    <Grid
      container
      sx={{
        width: { xs: "100%", sm: "60%" },
        margin: "auto"
      }}
    >
      <Grid item xs={12} sm={4} sx={{ marginBottom: '1rem' }}>
        <Box component="div">
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>About us</Typography>
          <Link href="/about" className="footer-link">Read more</Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ marginBottom: '1rem' }}>
        <Box component="div">
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>Services</Typography>
          <Link href="/" className="footer-link">All products</Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} sx={{ marginBottom: '1rem' }}>
        <Box component="div">
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold" }}>Made to</Typography>
          <Typography>
            Practice Next.js built by <Link href="https://benjamngarcia.me/" target="_blank" className="footer-link"> Benjamín García</Link>
          </Typography>
        </Box>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<LinkedInIcon />}
          size="small"
          onClick={() => {
            window.open('https://www.linkedin.com/in/benjamngarcia/', '_blank');
          }}
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<GitHubIcon />}
          size="small"
          onClick={() => {
            window.open('https://github.com/Benjamngarcia', '_blank');
          }}
        >
          GitHub
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "1rem" }}>
        <Box component="div">
          <Typography variant="body2">
            Vector images from <Link href="https://www.svgrepo.com/" target="_blank" className="footer-link"> SVG Repo</Link>
          </Typography>
        </Box>
        <Box component="div">
          <Typography variant="body2">
            Data from <Link href="https://fakestoreapi.com/" target="_blank" className="footer-link"> Fake Store API</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}