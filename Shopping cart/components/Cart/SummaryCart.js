import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useCart from "../../hooks/useCart";

export default function SummaryCart(props) {
  const { products, reloadCart, setReloadCart } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeProductCart } = useCart();

  useEffect(() => {
    let price = 0;
    products.forEach(product => price += product.price)
    setTotalPrice(price);
  }, [reloadCart, products]);

  const removeProduct = (product) => {
    removeProductCart(product);
    setReloadCart(true);
  };

  return (
    <>
      <List sx={{ width: '70%', margin: "3rem auto" }}>
        {
          products.map((product) => {
            return (
              <>
                <ListItem alignItems="flex-start"
                  key={product.id}
                  secondaryAction={
                    <IconButton aria-label="comment" onClick={() => removeProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{
                    padding: "2rem 1rem",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={product.title}
                      src={product.image}
                      sx={{
                        borderRadius: 0,
                        height: "100%",
                        width: "120px"
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body1"
                          color="text.secondary"
                        >
                          ${product.price}
                        </Typography>
                      </>
                    }
                    sx={{ height: "5rem", margin: "auto 2rem" }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            )
          })
        }
        <ListItem alignItems="flex-start"
          sx={{
            padding: "2rem 1rem",
          }}
        >
          <ListItemText
            primary={`Sub total: $${totalPrice}`}
            sx={{ height: "5rem", margin: "auto 2rem" }}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}