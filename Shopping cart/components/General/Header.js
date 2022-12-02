import { AppBar, Box, Toolbar, Typography, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo';
import Link from 'next/link';
import useCart from '../../hooks/useCart';

export const Header = () => {
  const { productsCart } = useCart()

  return (
    <Box>
      <AppBar
        component="nav"
        position="absolute"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: { xs: "auto 5%", sm: "auto 25%" }
          }}
        >
          <Link href="/" className="header-link">
            <Logo width={40} height={40} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", marginLeft: 1 }}>
              Ben Store
            </Typography>
          </Link>
          <Badge color="error" badgeContent={productsCart}>
            <Link href="/cart">
              <ShoppingCartIcon sx={{ color: "black" }} />
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}