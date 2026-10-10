import { Image as ImageIcon, Mic, Play } from 'lucide-react';
import type { ScenarioContent } from '../../types/scenario';

interface Props {
  conteudo: ScenarioContent;
}

const BARRAS = [6, 14, 9, 18, 12, 20, 8, 16, 11, 19, 7, 13, 17, 10, 15, 8, 12, 6];

// Mídia simulada via CSS: nenhuma imagem/vídeo/áudio real é usado.
export default function MessageMedia({ conteudo }: Props) {
  if (conteudo.tipo === 'imagem') {
    return (
      <div
        role="img"
        aria-label="Imagem simulada recebida na conversa"
        className="flex h-40 w-full items-center justify-center rounded-md bg-gradient-to-br from-slate-300 to-slate-400"
      >
        <ImageIcon className="h-10 w-10 text-slate-600" aria-hidden="true" />
      </div>
    );
  }

  if (conteudo.tipo === 'video') {
    return (
      <div
        role="img"
        aria-label={`Vídeo simulado de ${conteudo.duracao ?? 'duração desconhecida'}`}
        className="relative flex h-40 w-full items-center justify-center rounded-md bg-gradient-to-br from-slate-700 to-slate-900"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50">
          <Play className="h-6 w-6 text-white" aria-hidden="true" />
        </span>
        <span className="absolute bottom-1.5 right-2 rounded bg-black/60 px-1.5 text-xs text-white">
          {conteudo.duracao}
        </span>
      </div>
    );
  }

  if (conteudo.tipo === 'audio') {
    return (
      <div
        role="img"
        aria-label={`Áudio simulado de ${conteudo.duracao ?? 'duração desconhecida'}`}
        className="flex w-56 items-center gap-2 py-1"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zap-verde">
          <Play className="h-4 w-4 text-white" aria-hidden="true" />
        </span>
        <span className="flex h-6 flex-1 items-center gap-0.5" aria-hidden="true">
          {BARRAS.map((altura, i) => (
            <span key={i} className="w-1 rounded-full bg-slate-400" style={{ height: altura }} />
          ))}
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-600">
          <Mic className="h-3 w-3" aria-hidden="true" />
          {conteudo.duracao}
        </span>
      </div>
    );
  }

  return null;
}
