import { useEffect, useState } from 'react';
import { SCENARIOS } from '../../data/scenarios';
import { evaluateAction } from '../../engine/evaluateAction';
import { useAppState } from '../../context/AppContext';
import type { ActionType } from '../../types/scenario';
import FeedbackModal from '../feedback/FeedbackModal';
import ProgressBar from '../feedback/ProgressBar';
import ActionBar from './ActionBar';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

const ATRASO_DIGITANDO_MS = 900;

function ChatCenario() {
  const { state, dispatch } = useAppState();
  const indice = state.currentScenarioIndex;
  const scenario = SCENARIOS[indice];
  const resposta = state.answers[indice] as ActionType | undefined;
  const [digitando, setDigitando] = useState(true);

  // Efeito de "digitando..." antes de cada mensagem (o componente remonta a cada cenário)
  useEffect(() => {
    const timer = setTimeout(() => setDigitando(false), ATRASO_DIGITANDO_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!scenario) return null;

  const feedback = resposta ? evaluateAction(scenario, resposta) : null;

  function responder(acao: ActionType) {
    const { pontos } = evaluateAction(scenario, acao);
    dispatch({
      type: 'REGISTRAR_RESPOSTA',
      payload: { scenarioIndex: indice, answer: acao, points: pontos },
    });
  }

  return (
    <>
      <header className="bg-zap-header text-white">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-left">
            <h1 className="text-lg font-semibold leading-tight">{scenario.grupo}</h1>
            <p className="text-xs text-emerald-100">{digitando ? 'digitando...' : 'online'}</p>
          </div>
          <p className="text-sm font-medium" aria-hidden="true">
            {indice + 1}/{SCENARIOS.length}
          </p>
        </div>
        <ProgressBar atual={indice + 1} total={SCENARIOS.length} />
      </header>

      <main aria-live="polite" className="flex flex-1 flex-col gap-2 p-4">
        {digitando ? <TypingIndicator /> : <MessageBubble scenario={scenario} />}
      </main>

      <ActionBar disabled={digitando || resposta !== undefined} onAction={responder} />

      {feedback && (
        <FeedbackModal
          key={scenario.id}
          feedback={feedback}
          ultimo={indice === SCENARIOS.length - 1}
          onNext={() => dispatch({ type: 'AVANCAR_CENARIO' })}
        />
      )}
    </>
  );
}

// Remonta a cada cenário para reiniciar o efeito de "digitando..."
export default function ChatScreen() {
  const { state } = useAppState();
  return <ChatCenario key={state.currentScenarioIndex} />;
}
