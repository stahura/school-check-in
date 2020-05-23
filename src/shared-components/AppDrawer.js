import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Administration
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button key="Students">
                  <ListItemIcon><ChildCareIcon /></ListItemIcon>
                  <ListItemText primary="Students" />
              </ListItem>
              <ListItem button key="Administrators">
                  <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                  <ListItemText primary="Administrators" />
              </ListItem>
              <ListItem button key="History">
                  <ListItemIcon><TimelineIcon /></ListItemIcon>
                  <ListItemText primary="History" />
              </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="Settings">
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button key="Help">
                  <ListItemIcon><HelpIcon /></ListItemIcon>
                  <ListItemText primary="Help" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      
    </div>
  );
}