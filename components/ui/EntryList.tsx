import { FC, ReactElement } from 'react';
import { List, Paper } from '@mui/material';

import { EntryCard } from './EntryCard';

export const EntryList: FC = (): ReactElement => {
  return (
    <div>
      <Paper
        sx={{
          overflow: 'scroll',
          padding: '1rem',
          height: 'calc(100vh - 15rem)',
          backgroundColor: 'transparent',
        }}
      >
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
