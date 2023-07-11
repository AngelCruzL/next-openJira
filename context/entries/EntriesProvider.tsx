import {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useReducer,
} from 'react';

import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';

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

  const updateEntry = async ({
    status,
    description,
    _id,
  }: Entry): Promise<void> => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        status,
        description,
      });
      dispatch({ type: 'Entry - Update Entry', payload: data });
    } catch (error) {
      console.log(error);
    }
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
