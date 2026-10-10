import { RotateCcw } from 'lucide-react';
import { useAppState } from '../../context/AppContext';
import { DICAS_DE_OURO } from '../../data/dicas';
import { SCENARIOS } from '../../data/scenarios';
import { classificarAcao } from '../../engine/evaluateAction';
import type { ActionType, GatilhoId } from '../../types/scenario';
import GatilhoBadge from '../chat/GatilhoBadge';

export default function SummaryScreen() {
  const { state, dispatch } = useAppState();

  const niveis = SCENARIOS.map((cenario, i) => {
    const acao = state.answers[i] as ActionType | undefined;
    return acao ? classificarAcao(cenario, acao) : null;
  });
  const ideais = niveis.filter((n) => n === 'ideal').length;

  // Gatilhos dos cenários em que a pessoa não escolheu a ação ideal
  const gatilhosParaRevisar = new Set<GatilhoId>();
  SCENARIOS.forEach((cenario, i) => {
    if (niveis[i] !== 'ideal') cenario.gatilhos.forEach((g) => gatilhosParaRevisar.add(g));
  });
  const todosGatilhos = new Set<GatilhoId>(SCENARIOS.flatMap((c) => c.gatilhos));
  const revisar = gatilhosParaRevisar.size > 0;

  return (
    <main className="flex flex-1 animate-fade-in flex-col gap-5 p-6 text-left">
      <header className="text-center">
        <h1 className="text-2xl font-bold text-zap-header">Resumo</h1>
        <p className="mt-2 text-4xl font-bold text-slate-900">
          {ideais}/{SCENARIOS.length}
        </p>
        <p className="text-slate-700">
          ações ideais &middot; {state.score} pontos
        </p>
      </header>

      <section>
        <h2 className="mb-2 font-bold text-slate-900">
          {revisar ? 'Técnicas para ficar de olho' : 'Técnicas que você identificou'}
        </h2>
        <div className="flex flex-wrap gap-2">
          {[...(revisar ? gatilhosParaRevisar : todosGatilhos)].map((id) => (
            <GatilhoBadge key={id} id={id} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-bold text-slate-900">Dicas de ouro</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-800">
          {DICAS_DE_OURO.map((dica) => (
            <li key={dica}>{dica}</li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        onClick={() => dispatch({ type: 'REINICIAR' })}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-zap-header px-4 py-3 font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Recomeçar
      </button>
    </main>
  );
}
