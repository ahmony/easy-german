import { MenuItem, MenuList, Stack } from "@mui/material"
import { classes } from "./Sidebar.styles"
import { useState } from "react"
import { EMenuItems } from "./Sidebar.config"
import { useNavigate } from "react-router-dom"
import { Title } from "../title/Title"

export const Sidebar = () => {
  const navigate = useNavigate()
  const [selectedMenuItem, setSelectedMenuItem] = useState(EMenuItems.Home)

  const onMenuItemChange = (item: EMenuItems) => {
    setSelectedMenuItem(item)
    navigate(item.toLowerCase())
  }

  return (
    <Stack sx={classes.container}>
      <Title />
      <Stack>
        <MenuList>
          <MenuItem selected={selectedMenuItem === EMenuItems.Home} onClick={() => onMenuItemChange(EMenuItems.Home)}>
            {EMenuItems.Home}
          </MenuItem>
          <MenuItem
            selected={selectedMenuItem === EMenuItems.Playground}
            onClick={() => onMenuItemChange(EMenuItems.Playground)}
          >
            {EMenuItems.Playground}
          </MenuItem>
          <MenuItem selected={selectedMenuItem === EMenuItems.Rules} onClick={() => onMenuItemChange(EMenuItems.Rules)}>
            {EMenuItems.Rules}
          </MenuItem>
        </MenuList>
      </Stack>
    </Stack>
  )
}
