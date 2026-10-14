import { MessageCircle } from 'lucide-react';
import { useAppState } from '../../context/AppContext';
import { SCENARIOS } from '../../data/scenarios';

const PASSOS = [
  `Você vai receber ${SCENARIOS.length} mensagens fictícias, como em um grupo de WhatsApp.`,
  'Para cada uma, escolha: Compartilhar, Pesquisar, Ignorar ou Denunciar.',
  'Depois, veja o sinal de alerta, onde verificar e a fonte oficial.',
];

export default function IntroScreen() {
  const { dispatch } = useAppState();
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
        onClick={() => dispatch({ type: 'SET_SCREEN', payload: 'SIMULATOR' })}
        className="w-full rounded-lg bg-zap-header px-4 py-3 text-lg font-semibold text-white transition hover:bg-emerald-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
      >
        Começar
      </button>
    </main>
  );
}
