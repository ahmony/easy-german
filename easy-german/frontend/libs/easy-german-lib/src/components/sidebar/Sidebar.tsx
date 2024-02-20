import { MenuItem, MenuList, Stack } from '@mui/material';
import { classes } from './Sidebar.styles';
import { useState } from 'react';
import { EMenuItems } from './Sidebar.config';
import { useNavigate } from 'react-router-dom';
import { Title } from '../title/Title';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(EMenuItems.Diary);

  const onMenuItemChange = (item: EMenuItems) => {
    setSelectedMenuItem(item);
    navigate(item.toLowerCase());
  };

  return (
    <Stack sx={classes.container}>
      <Title />
      <Stack>
        <MenuList>
          <MenuItem
            selected={selectedMenuItem === EMenuItems.Diary}
            onClick={() => onMenuItemChange(EMenuItems.Diary)}
            data-testid="diary-menu-item"
          >
            <Stack sx={classes.menuItemContainer}>
              <HomeIcon /> {EMenuItems.Diary}
            </Stack>
          </MenuItem>
          <MenuItem
            selected={selectedMenuItem === EMenuItems.Playground}
            onClick={() => onMenuItemChange(EMenuItems.Playground)}
            data-testid="playground-menu-item"
          >
            <Stack sx={classes.menuItemContainer}>
              <SportsEsportsIcon />
              {EMenuItems.Playground}
            </Stack>
          </MenuItem>
          <MenuItem
            selected={selectedMenuItem === EMenuItems.Rules}
            onClick={() => onMenuItemChange(EMenuItems.Rules)}
          >
            <Stack sx={classes.menuItemContainer}>
              <DensityMediumIcon />
              {EMenuItems.Rules}
            </Stack>
          </MenuItem>
        </MenuList>
      </Stack>
    </Stack>
  );
};
