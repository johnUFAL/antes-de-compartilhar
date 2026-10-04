export type Screen = 'INTRO' | 'SIMULATOR' | 'SUMMARY';

export interface AppState {
  currentScreen: Screen;
  currentScenarioIndex: number;
  answers: Record<number, string>;
  score: number;
}

export type AppAction =
  | { type: 'SET_SCREEN'; payload: Screen }
  | { type: 'AVANCAR_CENARIO' }
  | { type: 'REGISTRAR_RESPOSTA'; payload: { scenarioIndex: number; answer: string; points: number } }
  | { type: 'REINICIAR' };

export const initialState: AppState = {
  currentScreen: 'INTRO',
  currentScenarioIndex: 0,
  answers: {},
  score: 0,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'AVANCAR_CENARIO':
      return { ...state, currentScenarioIndex: state.currentScenarioIndex + 1 };
    case 'REGISTRAR_RESPOSTA':
      return {
        ...state,
        answers: { ...state.answers, [action.payload.scenarioIndex]: action.payload.answer },
        score: state.score + action.payload.points,
      };
    case 'REINICIAR':
      return initialState;
    default:
      return state;
  }
}
