import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TimelineIcon from "@material-ui/icons/Timeline";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import { Route, NavLink, HashRouter } from "react-router-dom";
import firebase from "../firebase"
import { MuiThemeProvider } from "@material-ui/core/styles";
import blackButton from "../styles/blackButton"

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#212121',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const signout = () => {
    firebase.auth().signOut()
    
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List  >
        <NavLink to="/students">
          <ListItem button key="Students">
            <ListItemIcon>
              <ChildCareIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
        </NavLink>
        <ListItem button key="Administrators">
          <ListItemIcon>
            <SupervisorAccountIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Administrators" />
        </ListItem>
        <ListItem button key="History">
          <ListItemIcon>
            <TimelineIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Settings">
          <ListItemIcon>
            <SettingsIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button key="Help">
          <ListItemIcon>
            <HelpIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={blackButton}>
      <CssBaseline />
      <AppBar color="primary" position="fixed" className={classes.appBar}>
        <Toolbar style={{justifyContent: 'space-between'}}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" noWrap>
            <NavLink style={{color: 'white'}} to="/"> School Administration </NavLink>
          </Typography>
          <Button onClick={signout} style={{color: 'white'}}>Logout</Button>
        </Toolbar>
       
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      </MuiThemeProvider>
    </div>
  );
}

export default ResponsiveDrawer;
