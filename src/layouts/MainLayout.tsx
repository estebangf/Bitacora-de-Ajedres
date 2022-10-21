import { useState } from "react";
import { Outlet } from "react-router-dom";
import ToolBarApp from "../components/toolBarApp/ToolBarApp";
import AppMenu from "../components/appMenu/AppMenu";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

function MainLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <ToolBarApp />
      <Box sx={{
        width: "100%",
      }}>
        <Paper sx={{
          m: 5, p: 5,
        }}>
          <Outlet />
        </Paper>
      </Box>
    </div>
  );
}

export default MainLayout;