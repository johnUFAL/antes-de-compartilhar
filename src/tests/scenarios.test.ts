import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../data/scenarios';

describe('Dados de Scenarios', () => {
  it('deve ter 10 cenários', () => {
    expect(SCENARIOS).toHaveLength(10);
  });

  it('deve ter uma estrutura válida para todos os cenários', () => {
    SCENARIOS.forEach((scenario) => {
      expect(scenario).toHaveProperty('id');
      expect(scenario).toHaveProperty('remetente');
      expect(scenario).toHaveProperty('conteudo');
      expect(scenario.conteudo).toHaveProperty('tipo');
      expect(scenario).toHaveProperty('fonteOficial');
      expect(scenario.fonteOficial).toHaveProperty('url');
    });
  });

  it('deve ter um mediaUrl válido para tipos de imagem e vídeo', () => {
    SCENARIOS.forEach((scenario) => {
      if (scenario.conteudo.tipo === 'imagem' || scenario.conteudo.tipo === 'video') {
        expect(scenario.conteudo.mediaUrl).toBeDefined();
      }
    });
  });

  it('deve ter gatilhos válidos para todos os cenários', () => {
    SCENARIOS.forEach((scenario) => {
      expect(scenario.gatilhos).toBeInstanceOf(Array);
      expect(scenario.gatilhos.length).toBeGreaterThan(0);
    });
  });
});
