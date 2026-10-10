import { EyeOff, Flag, Search, Share2 } from 'lucide-react';
import type { ElementType } from 'react';
import type { ActionType } from '../../types/scenario';

interface Props {
  disabled: boolean;
  onAction: (acao: ActionType) => void;
}

interface Opcao {
  acao: ActionType;
  label: string;
  Icone: ElementType;
  estilo: string;
}

const OPCOES: Opcao[] = [
  { acao: 'compartilhar', label: 'Compartilhar', Icone: Share2, estilo: 'bg-zap-header text-white hover:bg-emerald-900' },
  { acao: 'pesquisar', label: 'Pesquisar', Icone: Search, estilo: 'bg-sky-700 text-white hover:bg-sky-800' },
  { acao: 'ignorar', label: 'Ignorar', Icone: EyeOff, estilo: 'bg-slate-700 text-white hover:bg-slate-800' },
  { acao: 'denunciar', label: 'Denunciar', Icone: Flag, estilo: 'bg-red-700 text-white hover:bg-red-800' },
];

export default function ActionBar({ disabled, onAction }: Props) {
  return (
    <div
      role="group"
      aria-label="O que você faria com esta mensagem?"
      className="grid grid-cols-2 gap-2 bg-white p-3"
    >
      {OPCOES.map(({ acao, label, Icone, estilo }) => (
        <button
          key={acao}
          type="button"
          disabled={disabled}
          aria-label={`${label} a mensagem`}
          onClick={() => onAction(acao)}
          className={`flex items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 ${estilo}`}
        >
          <Icone className="h-4 w-4" aria-hidden="true" />
          {label}
        </button>
      ))}
    </div>
  );
}
