import { createContext } from 'react';

import { Entry } from '../../interfaces';

type ContextProps = {
  entries: Entry[];
};

export const EntriesContext = createContext<ContextProps>({} as ContextProps);
