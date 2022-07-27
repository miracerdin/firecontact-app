import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            Fireapp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
