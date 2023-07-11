import {
  DragEvent,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
} from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { Entry } from '../../interfaces';
import { UIContext } from '../../context';

interface Props extends PropsWithChildren {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({
  entry: { description, createdAt, _id, status },
}): ReactElement => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('entry_id', _id);

    startDragging();
  };

  const onDragEnd = (event: DragEvent) => {
    endDragging();
  };

  return (
    <Card
      sx={{ marginBlockEnd: 2 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'end',
            paddingInlineStart: '2rem',
          }}
        >
          <Typography variant="body2">Hace 1 hora</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
