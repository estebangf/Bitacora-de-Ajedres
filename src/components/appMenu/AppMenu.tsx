import { Inbox, Mail, Menu } from "@mui/icons-material"
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";
import MenuOptionModel from "../../models/MenuOptionModel"

function AppMenu() {
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false)

  const menuOptions: MenuOptionModel[] = [
    {label: "Inicio", link: "/", icon: Inbox},
    {label: "Consultar Bitácora", link: "/Consultar Bitácora", icon: Inbox},
    {label: "Planeamiento Semanal", link: "/Planeamiento Semanal", icon: Inbox},
    {label: "Notas Diarias", link: "/daily-notes-list", icon: Inbox},
    {label: "Revision Semanal", link: "/Revision Semanal", icon: Inbox},
    {label: "Como usar", link: "/Como usar", icon: Inbox},
  ]
  const menuPersonalOptions: MenuOptionModel[] = [
    {label: "Perfil", link: "/Perfil", icon: Inbox},
    {label: "Opciones", link: "/Opciones", icon: Inbox},
  ]


  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };


  return (
    <Fragment>
      <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuOptions.map((menu, index) => (
              <ListItem key={menu.label} disablePadding onClick={() => navigate(menu.link)}>
                <ListItemButton>
                  <ListItemIcon>
                    <menu.icon />
                  </ListItemIcon>
                  <ListItemText primary={menu.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuPersonalOptions.map((menu, index) => (
              <ListItem key={menu.label} disablePadding onClick={() => navigate(menu.link)}>
              <ListItemButton>
                  <ListItemIcon>
                    <menu.icon />
                  </ListItemIcon>
                  <ListItemText primary={menu.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fragment>
  )
}

export default AppMenu
