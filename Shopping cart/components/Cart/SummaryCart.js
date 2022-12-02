import { useState, useEffect } from "react";
// import { Image, Icon, Table } from "semantic-ui-react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { forEach } from "lodash";
import useCart from "../../hooks/useCart";

export default function SummaryCart(props) {
  const { products, reloadCart, setReloadCart } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeProductCart } = useCart();

  useEffect(() => {
    let price = 0;
    forEach(products, (product) => {
      price += product.price;
    });
    setTotalPrice(price);
  }, [reloadCart, products]);

  // const removeProduct = (product) => {
  //   removeProductCart(product);
  //   setReloadCart(true);
  // };

  return (
    <List sx={{ width: '70%', margin: "3rem auto" }}>
      {
        products.map((product) => {
          return (
            <>
              <ListItem alignItems="flex-start"
                secondaryAction={
                  <IconButton aria-label="comment">
                    <DeleteIcon />
                  </IconButton>
                }
                sx={{
                  padding: "2rem 1rem",
                }}
                key={product.title}
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
    </List>
  );
}