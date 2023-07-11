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

  return (
    <UIContext.Provider value={{ isSidebarOpen: false }}></UIContext.Provider>
  );
};
