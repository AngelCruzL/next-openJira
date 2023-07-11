import { FC, PropsWithChildren, ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { Entry } from '../../interfaces';

interface Props extends PropsWithChildren {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({
  entry: { description, createdAt },
}): ReactElement => {
  return (
    <Card sx={{ marginBlockEnd: 2 }}>
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
