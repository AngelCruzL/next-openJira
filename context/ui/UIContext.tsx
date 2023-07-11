import { createContext } from 'react';

export type ContextProps = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const UIContext = createContext<ContextProps>({} as ContextProps);
