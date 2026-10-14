import { useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle2, ExternalLink, Info } from 'lucide-react';
import type { Feedback } from '../../types/scenario';

interface Props {
  feedback: Feedback;
  ultimo: boolean;
  onNext: () => void;
}

const ESTILOS = {
  ideal: { Icone: CheckCircle2, titulo: 'Ação ideal', faixa: 'bg-emerald-700' },
  aceitavel: { Icone: Info, titulo: 'Aceitável, mas dá para melhorar', faixa: 'bg-amber-700' },
  arriscada: { Icone: AlertTriangle, titulo: 'Ação arriscada', faixa: 'bg-red-700' },
} as const;

export default function FeedbackModal({ feedback, ultimo, onNext }: Props) {
  const { scenario, nivel, mensagem } = feedback;
  const { Icone, titulo, faixa } = ESTILOS[nivel];
  const botaoRef = useRef<HTMLButtonElement>(null);

  // Leva o foco ao botão para quem usa teclado ou leitor de tela
  useEffect(() => {
    botaoRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex animate-fade-in items-end justify-center bg-black/50">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-titulo"
        className="max-h-[90vh] w-full max-w-md animate-slide-up overflow-y-auto rounded-t-2xl bg-white"
      >
        <div className={`flex items-center gap-2 px-4 py-3 text-white ${faixa}`}>
          <Icone className="h-6 w-6" aria-hidden="true" />
          <h2 id="feedback-titulo" className="text-lg font-bold">
            {titulo}
          </h2>
        </div>

        <div className="space-y-3 p-4 text-left text-sm text-slate-800">
          <p className="font-semibold">{mensagem}</p>
          <section>
            <h3 className="font-bold text-red-800">Sinal de alerta</h3>
            <p>{scenario.sinalDeAlerta}</p>
          </section>
          <section>
            <h3 className="font-bold text-sky-800">Onde verificar</h3>
            <p>{scenario.ondeVerificar}</p>
          </section>
          <section>
            <h3 className="font-bold text-emerald-800">Fonte oficial</h3>
            <a
              href={scenario.fonteOficial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-800 underline focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
            >
              {scenario.fonteOficial.nome}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </section>
          <section>
            <h3 className="font-bold text-purple-800">Por que engana</h3>
            <p>{scenario.explicacao}</p>
          </section>
        </div>

        <div className="p-4 pt-0">
          <button
            ref={botaoRef}
            type="button"
            onClick={onNext}
            className="w-full rounded-lg bg-zap-header px-4 py-3 font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
          >
            {ultimo ? 'Ver resumo' : 'Próxima mensagem'}
          </button>
        </div>
      </div>
    </div>
  );
}
