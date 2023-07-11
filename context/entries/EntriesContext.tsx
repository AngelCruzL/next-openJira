import { createContext } from 'react';

import { Entry } from '../../interfaces';

type ContextProps = {
  entries: Entry[];
  addNewEntry: (description: string) => void;
};

export const EntriesContext = createContext<ContextProps>({} as ContextProps);
