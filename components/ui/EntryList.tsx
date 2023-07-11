import { FC, ReactElement, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

type Props = {
  status: EntryStatus;
};

export const EntryList: FC<Props> = ({ status }): ReactElement => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status],
  );

  return (
    <div>
      <Paper
        sx={{
          overflow: 'auto',
          padding: '1rem',
          height: 'calc(100vh - 15rem)',
          backgroundColor: 'transparent',
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
