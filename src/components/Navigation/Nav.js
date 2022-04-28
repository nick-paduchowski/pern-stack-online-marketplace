import React from "react";
import "./Nav.css";
import Logo from "../../assets/Logo.png";
import { GoSearch } from "react-icons/go";
import { Menu, MenuItem, Button, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/*
Logo made at: <a href='https://onlinelogomaker.com' title='Online Logo Maker'>onlinelogomaker.com</a>
*/

const useStyles = makeStyles((theme) => ({
  dropdown: {
    height: "100%",
    borderRadius: 0,
    margin: 0,
    padding: 0,
    borderRight: "1px solid black",
  },
  menuItem: {
    minWidth: 120,
  },
}));

const categoriesDropdown = styled(Button)(({ theme }) => ({
  height: "100%",
  borderRadius: 0,
  margin: 0,
  padding: 0,
  borderRight: "1px solid black",
}));

function Nav() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navigation-bar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="search">
        <input className="search-bar" placeholder="Search something..." />
        <div className="categories">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "black",
              padding: 0,
              margin: 0,
              borderRadius: 0,
            }}
          >
            Categories
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              Cars
            </MenuItem>
            <MenuItem onClick={handleClose}>Pets</MenuItem>
            <MenuItem onClick={handleClose}>Phones</MenuItem>
          </Menu>
        </div>
        <GoSearch className="search-btn" style={{ marginTop: "0.20rem" }} />
      </div>
    </div>
  );
}
export default Nav;
