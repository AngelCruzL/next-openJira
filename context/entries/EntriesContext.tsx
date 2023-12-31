import { createContext } from 'react';

import { Entry } from '../../interfaces';

type ContextProps = {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
};

export const EntriesContext = createContext<ContextProps>({} as ContextProps);
