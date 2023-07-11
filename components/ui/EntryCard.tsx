import { FC, ReactElement } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export const EntryCard: FC = (): ReactElement => {
  return (
    <Card sx={{ marginBlockEnd: 2 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>Description</Typography>
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
