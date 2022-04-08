import "./style.css";
import { Box, Typography } from "@mui/material";
import { sideBarItems } from "../../../data";
import { Item } from "./Item";
import { useNavigate } from "react-router-dom";
export const SideBar = ({ setIsAuth }) => {
  const items = sideBarItems;
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("admin");
    // navigate("/");
  };
  console.log(localStorage.getItem("admin"));
  return (
    <Box bgcolor="primary.main" className="sideBarContainer">
      <Box xs={12} className="dashHeading">
        <Typography color="white.main" variant="h5" component="h5">
          Admin Dashboard
        </Typography>
        <Box xs={12} className="sideItemsContainer">
          {items && items.map((item) => <Item key={item.id} item={item} />)}
        </Box>
      </Box>
    </Box>
  );
};
