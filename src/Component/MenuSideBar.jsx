import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import MapIcon from "@mui/icons-material/Map";
import { withRouter } from "react-router-dom";
const drawerWidth = 240;
const MenuSide = (props) => {

  const { history } = props;
  const itemList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => history.push("/dashboard"),
    },
    {
      text: "Clustering",
      icon: <SensorOccupiedIcon />,
      onClick: () => history.push("/clustering"),
    },
    {
      text: "Forcasting",
      icon: <TroubleshootIcon />,
      onClick: () => history.push("/forcasting"),
    },
    {
      text: "Map Service",
      icon: <MapIcon />,
      onClick: () => history.push("/mapService"),
    },
  ];
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            top : "unset"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem key={text} disablePadding onClick={onClick}>
                <ListItemButton>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default withRouter(MenuSide);
