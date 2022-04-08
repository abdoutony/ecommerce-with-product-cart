import useFetch from "../../hooks/useFetch";
import { products } from "../../data";
import { Grid, Box } from "@mui/material";
import { DetailsLeft } from "./DetailsLeft";
import { DetailsRight } from "./DetailsRight";
import "./style.css";
export const ProductDetails = ({ id }) => {
  const { data } = useFetch(products);

  return (
    <>
      {data ? (
        <Grid container className="detailsContainer">
          <Grid item xs={12} md={6}>
            <Box>
              <DetailsLeft image={data[id - 1].image} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <DetailsRight
                title={data[id - 1].title}
                description={data[id - 1].description}
                category={data[id - 1].category}
                price={data[id - 1].price}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        "no product to show"
      )}
    </>
  );
};
