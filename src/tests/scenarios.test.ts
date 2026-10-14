import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../data/scenarios';

describe('Dados de Scenarios', () => {
  it('deve ter pelo menos 10 cenários', () => {
    expect(SCENARIOS.length).toBeGreaterThanOrEqual(10);
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

  // it('deve ter um mediaUrl válido para tipos de imagem e vídeo', () => {
  //   SCENARIOS.forEach((scenario) => {
  //     if (scenario.conteudo.tipo === 'imagem' || scenario.conteudo.tipo === 'video') {
  //       expect(scenario.conteudo.mediaUrl).toBeDefined();
  //     }
  //   });
  // });

  it('deve ter um texto descrevendo a mídia nos tipos imagem e vídeo', () => {
    // A mídia é simulada via CSS (MessageMedia ignora mediaUrl); o texto descreve a mídia
    SCENARIOS.forEach((scenario) => {
      if (scenario.conteudo.tipo === 'imagem' || scenario.conteudo.tipo === 'video') {
        expect(scenario.conteudo.texto).toBeTruthy();
      }
    });
  });  

  it('deve ter gatilhos válidos para todos os cenários', () => {
    SCENARIOS.forEach((scenario) => {
      expect(scenario.gatilhos).toBeInstanceOf(Array);

      // expect(scenario.gatilhos.length).toBeGreaterThan(0);

      // Cenário legítimo (acaoIdeal "compartilhar") não tem gatilhos de manipulação
      if (scenario.acaoIdeal !== 'compartilhar') {
        expect(scenario.gatilhos.length).toBeGreaterThan(0);
      }
    });
  });
});
