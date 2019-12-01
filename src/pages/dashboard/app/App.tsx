import React from "react";
import clsx from "clsx";
//import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core";
import { Link, RouteComponentProps } from "react-router-dom";

//import { AppState } from "../../../redux/store";

import Drawer from "../../../component/ui-kit/drawer";
import AppBar from "../../../component/ui-kit/appBar";
import Toolbar from "../../../component/ui-kit/toolbar";
import Divider from "../../../component/ui-kit/divider";
import Typography from "../../../component/ui-kit/typography";
import {
  IconButton,
  InboxIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon
} from "../../../component/ui-kit/icons";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "../../../component/ui-kit/list";

import useStyles from "./app.style";
import DashboardRouter from "../";

interface IProps extends RouteComponentProps {}

const App: React.FC<IProps> = ({ match }) => {
  const [open, setOpen] = React.useState(false);
  //const token: string = useSelector((state: AppState) => state.user.token);
  const classes = useStyles();
  const theme = useTheme();
  const { url } = match;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Dashboard"} component={Link} to={url}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          <ListItem
            button
            key={"Setting"}
            component={Link}
            to={`${url}/setting`}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Setting"} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DashboardRouter url={url} />
      </main>
    </div>
  );
};
export default App;
