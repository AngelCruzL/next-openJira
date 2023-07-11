import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Add, SaveOutlined } from '@mui/icons-material';

export const NewEntry: FC = (): ReactElement => {
  const [isAddingEntry, setIsAddingEntry] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSaveEntry = () => {
    if (inputValue.length <= 0) return;

    console.log(inputValue);
  };

  return (
    <Box sx={{ marginBlockEnd: 2, paddingInline: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginBlock: '1rem' }}
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={
              inputValue.length <= 0 && isTouched && 'Ingrese un valor'
            }
            error={inputValue.length <= 0 && isTouched}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setIsTouched(true)}
          />

          <Box display="flex" justifyContent="space-between">
            <Button onClick={() => setIsAddingEntry(false)} variant="text">
              Cancelar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlined />}
              onClick={onSaveEntry}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<Add />}
          onClick={() => setIsAddingEntry(true)}
          fullWidth
          variant="outlined"
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
