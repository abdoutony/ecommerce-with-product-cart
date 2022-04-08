import { useSelector } from "react-redux";
import "./style.css";
import { CartItem } from "./Item";
import { Grid, Box } from "@mui/material";
export const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );

  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }

  return (
    <Grid container className="">
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center" }}>Cart</h1>
      </Grid>

      <Grid item xs={12} md={12} className="card-item-grid">
        <Box className="card-item-container">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} style={{ paddingRight: "15px" }}>
        <h2 className="total">Total Amount: ${totalAmount.toFixed(2)}</h2>
      </Grid>
    </Grid>
  );
};
