import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";
import { navItems } from "../../../data";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const NavBar = () => {
  const data = navItems;
  const { quantity } = useSelector((state) => state.cart);

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" className="logo">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            >
              Bi <span>3Li</span>
            </Typography>
          </Link>

          <Box className="navLinks">
            {data
              ? data.map((item) => (
                  <a href="/" key={item.id} className="link">
                    {item.text}
                  </a>
                ))
              : ""}
          </Box>

          <Box className="addToCart" sx={{ flexGrow: 0 }}>
            <Link to="/cart" className="cart">
              <Tooltip title="Open cart">
                <IconButton sx={{ p: 0 }}>
                  <ShoppingCartIcon color="white" />
                  {quantity !== 0 && (
                    <span className="quantity-nv">{quantity}</span>
                  )}
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
