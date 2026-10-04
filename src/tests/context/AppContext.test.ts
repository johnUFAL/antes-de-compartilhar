import { describe, it, expect } from 'vitest';
import { appReducer, initialState, type AppState } from '../../context/appReducer';

const defaultState: AppState = {
  currentScreen: 'INTRO',
  currentScenarioIndex: 0,
  answers: {},
  score: 0,
};

describe('appReducer', () => {
  it('should handle SET_SCREEN', () => {
    const action = { type: 'SET_SCREEN' as const, payload: 'SIMULATOR' as const };
    const state = appReducer(defaultState, action);
    expect(state.currentScreen).toBe('SIMULATOR');
  });

  it('should handle AVANCAR_CENARIO', () => {
    const action = { type: 'AVANCAR_CENARIO' as const };
    const state = appReducer(defaultState, action);
    expect(state.currentScenarioIndex).toBe(1);
  });

  it('should handle REGISTRAR_RESPOSTA', () => {
    const action = { 
      type: 'REGISTRAR_RESPOSTA' as const, 
      payload: { scenarioIndex: 0, answer: 'Opção A', points: 10 } 
    };
    const state = appReducer(defaultState, action);
    expect(state.answers[0]).toBe('Opção A');
    expect(state.score).toBe(10);
  });

  it('should handle REINICIAR', () => {
    const modifiedState: AppState = {
      currentScreen: 'SUMMARY',
      currentScenarioIndex: 5,
      answers: { 0: 'A' },
      score: 50,
    };
    const action = { type: 'REINICIAR' as const };
    const state = appReducer(modifiedState, action);
    expect(state).toEqual(initialState);
  });
});
