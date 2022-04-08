import { Typography, Button } from "@mui/material";

export const DetailsRight = ({ title, description, category, price }) => {
  return (
    <>
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      <p>Price : {price}$</p>
      <p>Category : {category}$</p>
      <p>Description : {description}$</p>
      <Button variant="contained" color="secondary">
        Add to cart
      </Button>
    </>
  );
};
