import { MessageCircle } from 'lucide-react';
import { useAppState } from '../../context/AppContext';
import { SCENARIOS } from '../../data/scenarios';
import { randomList } from '../../engine/sortearOrdem';
import { useState } from 'react';

const TOTAL = SCENARIOS.length;
const OPCOES = [...new Set([...[5, 10, 15, 20, 25, 30, 35].filter((n) => n < TOTAL), TOTAL])];
const PADRAO = OPCOES.includes(10) ? 10 : TOTAL;

export default function IntroScreen() {
  const { dispatch } = useAppState();
  const [quantidade, setQuantidade] = useState(PADRAO);

  const PASSOS = [
    `Você vai receber ${quantidade} mensagens fictícias, como em um grupo de WhatsApp.`,
    'Para cada uma, escolha: Compartilhar, Pesquisar, Ignorar ou Denunciar.',
    'Depois, veja o sinal de alerta, onde verificar e a fonte oficial.',
  ];

  return (
    <main className="flex flex-1 animate-fade-in flex-col items-center justify-center gap-6 p-6 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-zap-header">
        <MessageCircle className="h-10 w-10 text-white" aria-hidden="true" />
      </span>
      <div>
        <h1 className="text-3xl font-bold text-zap-header">Antes de Compartilhar</h1>
        <p className="mt-2 text-slate-700">
          Treine o olhar para reconhecer desinformação antes de apertar &ldquo;enviar&rdquo;.
        </p>
      </div>
      <fieldset className="w-full">
        <legend className="mb-2 w-full text-sm font-semibold text-slate-800">
          Quantas mensagens você quer analisar?
        </legend>
        <div className="flex flex-wrap justify-center gap-2">
          {OPCOES.map((n) => (
            <label key={n} className="cursor-pointer">
              <input
                type="radio"
                name="quantidade"
                value={n}
                checked={quantidade === n}
                onChange={() => setQuantidade(n)}
                className="peer sr-only"
              />
              <span className="block min-w-14 rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-800 transition peer-checked:border-zap-header peer-checked:bg-zap-header peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-yellow-400">
                {n === TOTAL ? `Todas (${n})` : n}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <ol className="list-decimal space-y-2 pl-5 text-left text-slate-800">
        {PASSOS.map((passo) => (
          <li key={passo}>{passo}</li>
        ))}
      </ol>
      <p className="rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-900">
        Todas as mensagens, nomes e situações são fictícios e criados apenas para fins educativos.
      </p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'INICIAR', payload: { ordem: randomList(TOTAL).slice(0, quantidade) } })}
        className="w-full rounded-lg bg-zap-header px-4 py-3 text-lg font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
      >
        Começar
      </button>
    </main>
  );
}
