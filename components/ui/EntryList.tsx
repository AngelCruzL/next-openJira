import { DragEvent, FC, ReactElement, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext, UIContext } from '../../context';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

import styles from './EntryList.module.css';

type Props = {
  status: EntryStatus;
};

export const EntryList: FC<Props> = ({ status }): ReactElement => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status],
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) =>
    event.preventDefault();
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('entry_id');
    const entry = entries.find(entry => entry._id === id)!;
    updateEntry({ ...entry, status });
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          overflow: 'auto',
          padding: '1rem',
          height: 'calc(100vh - 15rem)',
          backgroundColor: 'transparent',
        }}
      >
        <List
          sx={{ opacity: isDragging ? 0.2 : 1, transition: 'opacity 0.3s' }}
        >
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
