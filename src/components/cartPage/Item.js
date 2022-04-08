import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity
} from "../../redux/reducers/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button, Box } from "@mui/material";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, quantity, image } = props;
  return (
    <Box className="cart-item">
      <Box className="product-image">
        <img src={image} alt={title} />
      </Box>
      <Box className="product-title">
        <h2>{title}</h2>
        <h2 className="product-price">${price}</h2>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(removeFromCart(props))}
        >
          Remove from cart
        </Button>
      </Box>
      <Box className="quantity">
        <Button onClick={() => dispatch(subtractItemQuantity(props))}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <p>{quantity}</p>
        <Button onClick={() => dispatch(addItemQuantity(props))}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Box>
    </Box>
  );
};
