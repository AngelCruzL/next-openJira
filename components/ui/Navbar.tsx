import { FC, ReactElement, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { UIContext } from '../../context/ui';

export const Navbar: FC = (): ReactElement => {
  const { openSidebar } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSidebar}>
          <MenuOutlined />
        </IconButton>

        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
