import { SCENARIOS } from '../data/scenarios';

export type Screen = 'INTRO' | 'SIMULATOR' | 'SUMMARY';

export interface AppState {
  currentScreen: Screen;
  currentScenarioIndex: number;
  ordem: number[]; 
  answers: Record<number, string>;
  score: number;
}

export type AppAction =
| { type: 'SET_SCREEN'; payload: Screen }
| { type: 'INICIAR'; payload: { ordem: number[] } }
| { type: 'AVANCAR_CENARIO' }
  | { type: 'REGISTRAR_RESPOSTA'; payload: { scenarioIndex: number; answer: string; points: number } }
  | { type: 'REINICIAR' };

export const initialState: AppState = {
  currentScreen: 'INTRO',
  currentScenarioIndex: 0,
  ordem: SCENARIOS.map((_, i) => i),
  answers: {},
  score: 0,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'INICIAR':
      return { ...initialState, currentScreen: 'SIMULATOR', ordem: action.payload.ordem}
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'AVANCAR_CENARIO': {
      const proximo = state.currentScenarioIndex + 1;
      // Acabaram os cenários: vai para o resumo
      if (proximo >= state.ordem.length) {
        return { ...state, currentScreen: 'SUMMARY' };
      }
      return { ...state, currentScenarioIndex: proximo };
    }
    case 'REGISTRAR_RESPOSTA': {
      // Ignora resposta repetida para o mesmo cenário (evita pontuar duas vezes)
      if (action.payload.scenarioIndex in state.answers) return state;
      return {
        ...state,
        answers: { ...state.answers, [action.payload.scenarioIndex]: action.payload.answer },
        score: state.score + action.payload.points,
      };
    }
    case 'REINICIAR':
      return initialState;
    default:
      return state;
  }
}
