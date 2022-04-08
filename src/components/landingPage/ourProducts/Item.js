import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/reducers/cart";

import "./style.css";
export const Item = (props) => {
  const navigate = useNavigate();
  const { id, title, price, description, category, image } = props.item;
  const dispatch = useDispatch();
  return (
    <Card className="product">
      <CardMedia
        component="img"
        alt="product item"
        className="image-container"
        height="140"
        image={image}
      />
      <CardContent className="product-info">
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b> price: {price}$</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigate(`/products/${id}`)}
          color="secondary"
        >
          Product Details
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dispatch(
              addToCart({ id, title, description, price, category, image })
            )
          }
          color="secondary"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

Item.defaultProps = {
  title: "example title",
  description: "example description",
  category: "cat",
  price: "00"
};

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
  alertProduct: PropTypes.func
};
