import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { sideBarItems } from "../../../data";
import { useNavigate } from "react-router-dom";
export const AppBarSmallScreen = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const items = sideBarItems;

  return (
    <AppBar position="static" sx={{ display: { xs: "block", md: "none" } }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {items.map((page) => {
                if (page.text === "logout") {
                  return (
                    <MenuItem key={page.id} onClick={handleLogout}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  );
                } else {
                  return (
                    <MenuItem key={page.id} onClick={() => navigate(page.to)}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </MenuItem>
                  );
                }
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="logo"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Bi<span>3Li</span>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
