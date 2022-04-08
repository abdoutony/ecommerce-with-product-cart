import { Grid, Box, Typography } from "@mui/material";
import "./style.css";
import { AppBarSmallScreen } from "../../adminPage/appBar";
export const AdminContentLayout = ({ title, children }) => {
  return (
    <Grid>
      <AppBarSmallScreen />
      <Box className="adminContentHeading">
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Grid>
  );
};

AdminContentLayout.defaultprops = {
  title: "Index page for admin"
};
