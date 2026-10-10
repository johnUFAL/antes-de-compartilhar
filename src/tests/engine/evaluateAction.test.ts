import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../../data/scenarios';
import { evaluateAction, PONTOS_POR_NIVEL } from '../../engine/evaluateAction';
import type { ActionType } from '../../types/scenario';

const ACOES: ActionType[] = ['compartilhar', 'pesquisar', 'ignorar', 'denunciar'];

describe('evaluateAction', () => {
  it.each(SCENARIOS.map((s) => [s.id, s] as const))(
    '%s: avalia corretamente as 4 ações',
    (_id, scenario) => {
      ACOES.forEach((acao) => {
        const feedback = evaluateAction(scenario, acao);
        expect(feedback.scenario).toBe(scenario);
        expect(feedback.mensagem.length).toBeGreaterThan(0);

        if (acao === scenario.acaoIdeal) {
          expect(feedback.nivel).toBe('ideal');
          expect(feedback.correto).toBe(true);
          expect(feedback.pontos).toBe(PONTOS_POR_NIVEL.ideal);
        } else if (acao === 'compartilhar') {
          expect(feedback.nivel).toBe('arriscada');
          expect(feedback.correto).toBe(false);
          expect(feedback.pontos).toBe(0);
        } else {
          expect(feedback.nivel).toBe('aceitavel');
          expect(feedback.correto).toBe(false);
          expect(feedback.pontos).toBe(PONTOS_POR_NIVEL.aceitavel);
        }
      });
    },
  );

  it('é pura: mesma entrada gera o mesmo resultado', () => {
    const a = evaluateAction(SCENARIOS[0], 'ignorar');
    const b = evaluateAction(SCENARIOS[0], 'ignorar');
    expect(a).toEqual(b);
  });
});
