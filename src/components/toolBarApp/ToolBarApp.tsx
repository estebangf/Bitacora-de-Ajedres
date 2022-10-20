import { AppBar, Toolbar, Typography } from "@mui/material"
import AppMenu from "../appMenu/AppMenu"

function ToolBarApp() {

  return (
    <AppBar>
      <Toolbar>
        <AppMenu />
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          ToolBarApp
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default ToolBarApp