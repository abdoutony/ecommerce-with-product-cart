import "./style.css";
import Grid from "@mui/material/Grid";
import heroimg from "../../../images/manmodelimg.png";
import { Button, Box } from "@mui/material";

import { heroInfo } from "../../../data";
import useFetch from "../../../hooks/useFetch";
export const Hero = () => {
  const data = heroInfo;
  return (
    <Grid
      container
      className="heroContainer"
      bgcolor="primary.main"
      spacing={3}
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <h1 className="heroTitle">{data ? data[0].title : ""}</h1>
          <p className="heroParagraph">{data ? data[0].description : ""}</p>
          <Button variant="contained" color="secondary">
            Visit all products
          </Button>
        </Box>
        <Box
          style={{ margin: "15px 0" }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <h1 className="heroTitle">{data ? data[0].title : ""}</h1>
          <p className="heroParagraph">{data ? data[0].description : ""}</p>
          <Button variant="contained" color="secondary">
            Visit all products
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: { xs: "none", md: "block" } }}
        style={{ paddingTop: "15px" }}
      >
        <img src={heroimg} alt="heroimage" className="heroImg" width="400" />
      </Grid>
    </Grid>
  );
};
