import { useState } from "react";
import { Outlet } from "react-router-dom";
import ToolBarApp from "../components/toolBarApp/ToolBarApp";
import AppMenu from "../components/appMenu/AppMenu";
import Box from "@mui/material/Box";

function MainLayout() {
  return (
    <div>
      <ToolBarApp />
      <Box sx={{ pt: 10 }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default MainLayout;