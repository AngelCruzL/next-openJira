import { createContext } from 'react';

export type ContextProps = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

  isAddingEntry: boolean;
  setIsAddingEntry: (isAdding: boolean) => void;

  isDragging: boolean;
  startDragging: () => void;
  endDragging: () => void;
};

export const UIContext = createContext<ContextProps>({} as ContextProps);
