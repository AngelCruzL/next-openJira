import { FC, ReactElement } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { InboxOutlined, MailOutlineOutlined } from '@mui/icons-material';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar: FC = (): ReactElement => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log('close')}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ paddingBlock: '1rem', paddingInline: '2rem' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text}>
              <ListItemIcon
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlineOutlined />}
                <ListItemText primary={text} />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text}>
              <ListItemIcon
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutlineOutlined />}
                <ListItemText primary={text} />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
