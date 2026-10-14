import type { Scenario } from '../../types/scenario';
import MessageMedia from './MessageMedia';

interface Props {
  scenario: Scenario;
}

export default function MessageBubble({ scenario }: Props) {
  const { conteudo, remetente, horario } = scenario;
  return (
    <article
      aria-label={`Mensagem de ${remetente} às ${horario}`}
      className="max-w-[85%] animate-fade-in-up self-start rounded-lg rounded-tl-none bg-white px-3 py-2 shadow"
    >
      <p className="mb-1 text-left text-sm font-bold text-zap-verde">{remetente}</p>
      {conteudo.tipo !== 'texto' && (
        <div className="mb-1">
          <MessageMedia conteudo={conteudo} />
        </div>
      )}
      {conteudo.texto && (
        <p className="whitespace-pre-line text-left text-[15px] leading-snug text-slate-900">
          {conteudo.texto}
        </p>
      )}
      <p className="mt-1 text-right text-[11px] text-slate-600">{horario}</p>
    </article>
  );
}
