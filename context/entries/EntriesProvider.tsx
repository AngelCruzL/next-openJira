import {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useReducer,
} from 'react';

import { Entry } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { entriesApi } from '../../apis';

export type EntriesState = {
  entries: Entry[];
};

const INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: 'Entry - Refresh Entries', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string): Promise<void> => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: 'Entry - Add Entry', payload: data });
  };

  const updateEntry = (entry: Entry): void => {
    dispatch({ type: 'Entry - Update Entry', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
