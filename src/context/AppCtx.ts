import { createContext } from 'react';
import { type AppState, type AppAction } from './appReducer';

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);
