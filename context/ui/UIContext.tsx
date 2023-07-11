import { createContext } from 'react';

export type ContextProps = {
  isSidebarOpen: boolean;
};

export const UIContext = createContext<ContextProps>({} as ContextProps);
