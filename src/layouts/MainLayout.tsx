import { useState } from "react";
import { Outlet } from "react-router-dom";
import ToolBarApp from "../components/toolBarApp/ToolBarApp";
import AppMenu from "../components/appMenu/AppMenu";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

function MainLayout() {
  return (
    <div>
      <ToolBarApp />
      <Box sx={{ pt: 10 }}>
        <Paper sx={{ m: 10, p: 5, position: 'relative'}}>
          <Outlet />
        </Paper>
      </Box>
    </div>
  );
}

export default MainLayout;