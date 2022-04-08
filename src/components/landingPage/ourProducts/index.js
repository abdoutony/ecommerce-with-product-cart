import { Grid } from "@mui/material";
import { Item } from "./Item";
import "./style.css";
import useFetch from "../../../hooks/useFetch";
import { products } from "../../../data";
import { Loading } from "../../general/loading";
export const OurProducts = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const alertProduct = (name) => {
    alert(name);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return "error";
  }

  return (
    <Grid container className="ourProductsContainer" spacing={3}>
      <Grid item xs={12}>
        <h1 className="text-center">Our Products</h1>
      </Grid>
      {data ? (
        data.map((product) => {
          return (
            <Grid className="products" key={product.id} item xs={12} md={4}>
              <Item item={product} alertProduct={alertProduct} />
            </Grid>
          );
        })
      ) : (
        <p>there are no products</p>
      )}
    </Grid>
  );
};
