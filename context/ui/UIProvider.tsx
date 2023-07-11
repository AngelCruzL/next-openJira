import { FC, PropsWithChildren, ReactElement, useReducer } from 'react';

import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export type UIState = {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
};

const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSidebar = () => dispatch({ type: 'UI - Close Sidebar' });
  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
