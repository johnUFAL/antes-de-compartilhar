import { useEffect, useRef, useState } from 'react';
import { Mic, Pause, Play } from 'lucide-react';

interface Props {
  src: string;
  duracao?: string;
}

const BARRAS = [6, 14, 9, 18, 12, 20, 8, 16, 11, 19, 7, 13, 17, 10, 15, 8, 12, 6];

// Áudio real: só toca quando o usuário clica (sem autoplay) e para ao sair do cenário
export default function MessageAudio({ src, duracao }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
        if (audio && !audio.paused) audio.pause();
    };
  }, []);

  function alternar() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setTocando(false)); // falha de reprodução não quebra o app
    } else {
      audio.pause();
    }
  }

  return (
    <div className="flex w-56 items-center gap-2 py-1">
      <audio
        ref={audioRef}
        src={src}
        preload="none"
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        onEnded={() => setTocando(false)}
      />
      <button
        type="button"
        onClick={alternar}
        aria-label={tocando ? 'Pausar áudio' : 'Reproduzir áudio'}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zap-verde"
      >
        {tocando ? (
          <Pause className="h-4 w-4 text-white" aria-hidden="true" />
        ) : (
          <Play className="h-4 w-4 text-white" aria-hidden="true" />
        )}
      </button>
      <span className="flex h-6 flex-1 items-center gap-0.5" aria-hidden="true">
        {BARRAS.map((altura, i) => (
          <span
            key={i}
            className={`w-1 rounded-full ${tocando ? 'bg-zap-verde' : 'bg-slate-400'}`}
            style={{ height: altura }}
          />
        ))}
      </span>
      <span className="flex items-center gap-1 text-xs text-slate-600">
        <Mic className="h-3 w-3" aria-hidden="true" />
        {duracao}
      </span>
    </div>
  );
}
