import { useReducer, type ReactNode } from 'react';
import { appReducer, initialState } from './appReducer';
import { AppContext } from './AppCtx';

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

