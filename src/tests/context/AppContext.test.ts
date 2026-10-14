import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../../data/scenarios';
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

  it('vai para o resumo ao avançar do último cenário', () => {
    const ultimo: AppState = { ...defaultState, currentScreen: 'SIMULATOR', currentScenarioIndex: SCENARIOS.length - 1 };
    const state = appReducer(ultimo, { type: 'AVANCAR_CENARIO' });
    expect(state.currentScreen).toBe('SUMMARY');
    expect(state.currentScenarioIndex).toBe(SCENARIOS.length - 1);
  });

  it('ignora segunda resposta ao mesmo cenário', () => {
    const acao = { type: 'REGISTRAR_RESPOSTA' as const, payload: { scenarioIndex: 0, answer: 'pesquisar', points: 10 } };
    const uma = appReducer(defaultState, acao);
    const duas = appReducer(uma, { ...acao, payload: { ...acao.payload, answer: 'compartilhar', points: 0 } });
    expect(duas.answers[0]).toBe('pesquisar');
    expect(duas.score).toBe(10);
  });
});
