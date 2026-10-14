import { GATILHOS } from '../../data/gatilhos';
import type { GatilhoId, Gatilho } from '../../types/scenario';

interface Props {
  id: GatilhoId;
}

const CORES: Record<Gatilho['cor'], string> = {
  red: 'bg-red-100 text-red-800',
  orange: 'bg-orange-100 text-orange-900',
  teal: 'bg-teal-100 text-teal-900',
  purple: 'bg-purple-100 text-purple-900',
};

export default function GatilhoBadge({ id }: Props) {
  const gatilho = GATILHOS[id];
  if (!gatilho) return null;
  const Icone = gatilho.icone;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${CORES[gatilho.cor]}`}
    >
      <Icone className="h-3.5 w-3.5" aria-hidden="true" />
      {gatilho.label}
    </span>
  );
}
