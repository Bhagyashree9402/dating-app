import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import ProfileIcon from "@material-ui/icons/Person";
// import Axios from "axios";
import React, { useContext } from "react";
// import Icon from "@material-ui/core/Icon";
import { Link, useHistory } from "react-router-dom";

import SvgMumble from "./MumbleIcon/Mumble";
import UserContext from "../../context/UserContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    position: "fixed",
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("recents");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setUserData } = useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setUserData({ token: "", user: "" });
    localStorage.setItem("auth-token", "");
    history.push("/login");
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Discover"
        value="discover"
        component={Link}
        to="/profile/discover"
        icon={<SvgMumble />}
      />

      <BottomNavigationAction
        label="Likes"
        value="likes"
        // aria-controls="customized-menu"
        // aria-haspopup="true"
        // variant="contained"
        icon={<FavoriteIcon />}
        component={Link}
        to="/profile/likes"
        // onClick={handleClick}
      />

      {/* <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem component={Link} to="/profile/likes">
          <ListItemText label="YouLikes" value="Youlikes" primary="You Like" />
        </StyledMenuItem>
        {/* <StyledMenuItem component={Link} to="/profile/likes">
          <ListItemText primary="Likes You" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Mutual Likes" />
        </StyledMenuItem> 
      </StyledMenu> */}

      <BottomNavigationAction
        label="Profile"
        value="profile"
        component={Link}
        to="/profile"
        icon={<ProfileIcon />}
      />

      <BottomNavigationAction
        label="Logout"
        value="logout"
        icon={<LogoutIcon />}
        onClick={logout}
      />
    </BottomNavigation>
  );
}
