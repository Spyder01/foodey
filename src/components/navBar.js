import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "./menu";
import Store from "../store/index";
import "./styles/navBar.css";
import logo from "../assets/logo.png";

const useStyles = makeStyles(() => ({
  appBar: {
    flexGrow: 1,
    height: "10vh",
  },
  logo: {
    flexGrow: 1,
  },
}));

const NavBar = ({ active, Color, scroll }) => {
  const History = useHistory();
  const loggedIn = useRecoilValue(Store.isLoggedIn);
  const name = useRecoilValue(Store.name);
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const Colorizer = (Activated) => {
    if (Activated === active) return "#f36f27";
    else return "#707070";
  };

  return (
    <ElevationScroll enableScroll={scroll}>
      <AppBar className={styles.appBar} style={{backgroundColor: Color}}>
        <Toolbar>
          <div className={styles.logo}>
            <img src={logo} alt="logo" className="Logo" onClick={()=>History.push('/')}></img>
          </div>

          <NavItems
            name={name}
            Colorizer={Colorizer}
            loggedIn={loggedIn}
            History={History}
          />
          <div className="menu-icon">
            <MenuIcon open={open} click={() => setOpen(!open)} />
          </div>
          <NavDrawer
            open={open}
            History={History}
            loggedIn={loggedIn}
            Colorizer={Colorizer}
            name={name}
            setOpen={setOpen}
          />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;

NavBar.defaultProps = {
  Color: "#FBFEFD"
}

function ElevationScroll(props) {
  const {enableScroll} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: enableScroll||false,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

const useDrawerStyles = makeStyles(() => ({
  root: {
    width: "60%",
  },
  navItems: {
    cursor: "pointer",
  },
}));

const NavItems = ({ Colorizer, loggedIn, name, History }) => {
  return (
    <div className="nav-items">
      <span
        style={{ color: Colorizer("Home") }}
        onClick={() => History.push("/")}
      >
        Home
      </span>
      <span
        style={{ color: Colorizer("Community") }}
        onClick={() => History.push("/community")}
      >
        Community
      </span>
      <span
        onClick={() => History.push("/login")}
        style={{
          color: Colorizer("SignIn"),
          display: !loggedIn ? "inline-block" : "none",
        }}
      >
        Sign In
      </span>
      <span
        style={{ display: loggedIn ? "inline-block" : "none", color: "orange" }}
      >
        {name}
      </span>
    </div>
  );
};

const NavDrawer = ({ open, Colorizer, loggedIn, History, name, setOpen }) => {
  const styles = useDrawerStyles();

  return (
    <Drawer open={open} anchor="left" className={styles.root}>
      <List>
        <ListItem className="logo">
          <img
            src={logo}
            alt="logo"
            height="120"
            onClick={() => History.push("/")}
          ></img>
          <MenuIcon click={() => setOpen(!open)} />
        </ListItem>
        <Divider />
        <ListItem
          className={styles.navItems}
          style={{
            display: loggedIn ? "inline-block" : "none",
            color: "orange",
          }}
          button
        >
          {name}
        </ListItem>
        <ListItem
          className={styles.navItems}
          style={{ color: Colorizer("Home") }}
          onClick={() => History.push("/")}
          button
        >
          Home
        </ListItem>
        <ListItem
          className={styles.navItems}
          style={{ color: Colorizer("Community") }}
          onClick={() => History.push("/community")}
          button
        >
          Community
        </ListItem>
        <ListItem
          className={styles.navItems}
          onClick={() => History.push("/login")}
          style={{
            color: Colorizer("SignIn"),
            display: !loggedIn ? "inline-block" : "none",
          }}
          button
        >
          Sign In
        </ListItem>
      </List>
    </Drawer>
  );
};
