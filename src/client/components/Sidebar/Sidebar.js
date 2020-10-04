import React from "react";
import "./Sidebar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
const useStyles = makeStyles((theme) => ({
  ListItemText: {
    color: "white",
  },
  ListItemIcon: {
    color: "#6f6f6f",
  },
  Divider: {
    backgroundColor: "#6f6f6f",
  },
}));
function Sidebar() {
  const classes = useStyles();

  return (
    <Router>
      <div className="sidebar_container">
        <List>
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.ListItemText} />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary="Trending" className={classes.ListItemText} />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Subscriptions"
              className={classes.ListItemText}
            />
          </ListItem>
          <Divider className={classes.Divider} />
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Library" className={classes.ListItemText} />
          </ListItem>

          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" className={classes.ListItemText} />
          </ListItem>

          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <OndemandVideoIcon />
            </ListItemIcon>
            <ListItemText
              primary="Your videos"
              className={classes.ListItemText}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText
              primary="Watch later"
              className={classes.ListItemText}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              <ThumbUpAltIcon />
            </ListItemIcon>
            <ListItemText
              primary="Liked videos"
              className={classes.ListItemText}
            />
          </ListItem>

          <Divider className={classes.Divider} />
        </List>
      </div>
    </Router>
  );
}

export default Sidebar;
