import React from "react";

import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary :{
            main: red['A700'],
        }
    }
})
 

const CartIcon = ({ cartItems }) => {
  return (
    <ThemeProvider theme= {theme}>
      <div className= "cart">
        <Badge color="primary" badgeContent={cartItems}>
          {cartItems !== 0 ? (
            <ShoppingCartIcon />
          ) : (
            <ShoppingCartOutlinedIcon strokeWidth="1" />
          )}
        </Badge>
      </div>
    </ThemeProvider>
  );
};

export default CartIcon;
