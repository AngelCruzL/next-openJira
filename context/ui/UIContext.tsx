import { createContext } from 'react';

export type ContextProps = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

  isAddingEntry: boolean;
  setIsAddingEntry: (isAdding: boolean) => void;
};

export const UIContext = createContext<ContextProps>({} as ContextProps);
