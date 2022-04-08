import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Compare } from "../../../helpers";
import { Link } from "react-router-dom";
import "./style.css";
export const Item = ({ item }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  return (
    <Box className={Compare(item.to) ? "itemBox is-active" : "itemBox"}>
      {item.text === "logout" ? (
        <button className="sideLink logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={item.icon} style={{ margin: "0 15px" }} />
          {item.text}
        </button>
      ) : (
        <Link className="sideLink" to={item.to}>
          <FontAwesomeIcon icon={item.icon} style={{ margin: "0 15px" }} />
          {item.text}
        </Link>
      )}
    </Box>
  );
};

Item.defaultProps = {
  item: {
    text: "Hello"
  }
};
