import { FC, PropsWithChildren, ReactElement, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export type UIState = {
  isSidebarOpen: boolean;
};

const UI_INITIAL_STATE: UIState = {
  isSidebarOpen: false,
};

export const UIProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSidebar = () => dispatch({ type: 'UI - Close Sidebar' });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
