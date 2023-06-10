import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function ToolbarContent({ isMobile }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={handleOpenMenu}
          style={{ color: "#0094D9", marginRight: "10%" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>About</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Privacy Policy</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Contact us</MenuItem>
        </Menu>
      </>
    );
  }

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
        About
      </Typography>
      <Typography
        sx={{ mx: 2, "&:hover": { color: "#0681B4", cursor: "pointer" } }}
        variant="subtitle1"
      >
        Privacy Policy
      </Typography>
      <Typography
        sx={{ mx: 2, "&:hover": { color: "#0681B4", cursor: "pointer" } }}
        variant="subtitle1"
      >
        Contact us
      </Typography>
    </Box>
  );
}

export default function FooterComp() {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#34AFE01A",
          borderBottom: "1px solid #ccc",
          padding: "0.5%",
        }}
      >
        <Toolbar>
          {!isMobile && (
            <IconButton size="large" edge="start" color="inherit">
              <img src={require("../assets/Images/Image1.png")} />
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
            <p>
              &copy; {new Date().getFullYear()} Pro Med, Inc. All rights
              reserved.
            </p>

            {isMobile && (
              <IconButton size="large" edge="end" color="inherit">
                <img src={require("../assets/Images/Image2.png")} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
