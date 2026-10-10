interface Props {
  atual: number;
  total: number;
}

// Barra de progresso animada (atual é 1-indexado)
export default function ProgressBar({ atual, total }: Props) {
  const porcentagem = Math.round((atual / total) * 100);
  return (
    <div
      role="progressbar"
      aria-label="Progresso das mensagens"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={atual}
      aria-valuetext={`Mensagem ${atual} de ${total}`}
      className="h-1.5 w-full bg-white/30"
    >
      <div
        className="h-full bg-yellow-300 transition-all duration-500 ease-out"
        style={{ width: `${porcentagem}%` }}
      />
    </div>
  );
}
