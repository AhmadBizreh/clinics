import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ToolbarContent({ isMobile }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
      }}
      style={{ width: "96px", height: "11px", color: "#828282" }}
    >
      <Typography
        sx={{ mx: 2, "&:hover": { color: "#0681B4", cursor: "pointer" } }}
        variant="subtitle1"
      >
        Community
      </Typography>
      <Typography
        sx={{ mx: 2, "&:hover": { color: "#0681B4", cursor: "pointer" } }}
        variant="subtitle1"
      >
        Appointments
      </Typography>
      <Typography
        sx={{ mx: 2, "&:hover": { color: "#0681B4", cursor: "pointer" } }}
        variant="subtitle1"
      >
        Archive
      </Typography>
    </Box>
  );
}

export default function AppBarComp() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    document.title = "ProMed";
  });

  function handleOpenDrawer() {
    if (isMobile) {
      setIsDrawerOpen(true);
    } else {
      return;
    }
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
          padding: "0.5%",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              onClick={handleOpenDrawer}
              size="large"
              edge="end"
              color="info"
            >
                <ArrowBackIosNewIcon />
              
            </IconButton>
          )}
          {!isMobile && (
            <IconButton
              onClick={handleOpenDrawer}
              size="large"
              edge="start"
              color="inherit"
            >
              <Link to="/" title="Home">
                <img src={require("../assets/Images/Image1.png")} />
              </Link>
            </IconButton>
          )}
          {!isMobile && (
            <Typography variant="h6" noWrap component="div">
              <span style={{ color: "#333333" }}>Pro</span>
              <span style={{ color: "#0681B4" }}>Med</span>
            </Typography>
          )}
          <ToolbarContent isMobile={isMobile} />
          <Box sx={{ color: "#34AFE0" }}>
            {!isMobile && (
              <IconButton size="large" color="inherit">
                <Badge>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            )}
            {!isMobile && (
              <IconButton size="large" edge="end" color="inherit">
                <Link to="/profile" title="Profile">
                  <img
                    src={require("../assets/Images/ProfilePhoto.png")}
                    alt="Profile"
                  />
                </Link>
              </IconButton>
            )}
            {isMobile && (
              <IconButton size="large" edge="end" color="inherit">
                <Link to="/" title="Home">                  
                  <img src={require("../assets/Images/Image2.png")} />
                </Link>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleCloseDrawer}>
        <List sx={{ width: "200px" }}>
          <ListItem onClick={handleCloseDrawer}>
            <ListItemText primary="Community" />
          </ListItem>
          <ListItem onClick={handleCloseDrawer}>
            <ListItemText primary="Appointments" />
          </ListItem>
          <ListItem onClick={handleCloseDrawer}>
            <ListItemText primary="Archive" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
