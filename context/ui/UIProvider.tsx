import { FC, PropsWithChildren, ReactElement, useReducer } from 'react';

import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export type UIState = {
  isSidebarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
};

const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSidebar = () => dispatch({ type: 'UI - Close Sidebar' });
  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
  const startDragging = () => dispatch({ type: 'UI - Start Dragging' });
  const endDragging = () => dispatch({ type: 'UI - End Dragging' });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
