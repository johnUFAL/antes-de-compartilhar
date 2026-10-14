import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../data/scenarios';
import { GATILHOS } from '../data/gatilhos';


describe("scenarios.ts", () => {
    it("tem pelo menos um cenário cadastrado", () => {
        expect(SCENARIOS.length).toBeGreaterThan(0);
    });

    it("não tem ids duplicados", () => {
        const ids = SCENARIOS.map((cenario) => cenario.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it("todo gatilho referenciado existe no catálogo de gatilhos", () => {
        SCENARIOS.forEach((cenario) => {
            cenario.gatilhos.forEach((gatilhoId) => {
                expect(GATILHOS[gatilhoId]).toBeDefined();
            });
        });
    });

    it("toda fontOficial tem uma url não vazia", () => {
        SCENARIOS.forEach((cenario) => {
            expect(cenario.fonteOficial.url).toMatch(/^https?\/\//);
        });
    });

    it("cenário de mídia têm conteúdo mínimo esperado", () => {
        SCENARIOS.forEach((cenario) => {
            if (cenario.conteudo.tipo === "video" || cenario.conteudo.tipo === "audio") {
                expect(cenario.conteudo.duracao).toBeDefined();
            }
        })
    })
});
