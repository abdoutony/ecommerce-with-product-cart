import { SideBar } from "../../adminPage/sideBar";
import { Grid } from "@mui/material";
export const AdminPageLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={10}>
        {children}
      </Grid>
    </Grid>
  );
};
