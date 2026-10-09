import React from 'react';
import { ArrowLeft, EllipsisVertical, UsersRound } from 'lucide-react';
import { useAppState } from '../hooks/useAppState';
import { MessageBubble } from './MessageBubble';
import { SCENARIOS } from '../data/scenarios';

export const ChatScreen: React.FC = () => {
  const { state } = useAppState();
  const currentScenario = SCENARIOS[state.currentScenarioIndex];

  if (!currentScenario) {
    return (
      <main className="chat-page">
        <p role="status">Conversa indisponível.</p>
      </main>
    );
  }

  return (
    <main className="chat-page">
      <section className="chat-phone" aria-label={`Conversa: ${currentScenario.grupo}`}>
        <header className="chat-header">
          <span className="chat-header__icon" aria-hidden="true">
            <ArrowLeft aria-hidden="true" />
          </span>
          <div className="chat-header__avatar" aria-hidden="true">
            <UsersRound />
          </div>
          <h2 className="chat-header__title">{currentScenario.grupo}</h2>
          <span className="chat-header__icon" aria-hidden="true">
            <EllipsisVertical aria-hidden="true" />
          </span>
        </header>

        <div className="chat-messages" aria-label="Mensagens">
          <div className="chat-date">
            <span>Hoje</span>
          </div>
          <MessageBubble scenario={currentScenario} isSender={false} />
        </div>

        <div className="chat-actions" role="group" aria-label="Ações disponíveis">
          <div className="chat-action chat-action--search">
            <span className="chat-action__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="10.8" cy="10.8" r="6.4" />
                <path d="m15.5 15.5 4.2 4.2" />
              </svg>
            </span>
            <span>Pesquisar</span>
          </div>
          <div className="chat-action chat-action--ignore">
            <span className="chat-action__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.2" />
                <path d="m6.2 6.2 11.6 11.6" />
              </svg>
            </span>
            <span>Ignorar</span>
          </div>
          <div className="chat-action chat-action--report">
            <span className="chat-action__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8.5 3.8h7l4.7 4.7v7l-4.7 4.7h-7l-4.7-4.7v-7l4.7-4.7Z" />
                <path d="M12 8v4.5m0 3h.01" />
              </svg>
            </span>
            <span>Denunciar</span>
          </div>
          <div className="chat-action chat-action--share">
            <span className="chat-action__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="18" cy="5" r="2.4" />
                <circle cx="6" cy="12" r="2.4" />
                <circle cx="18" cy="19" r="2.4" />
                <path d="m8.1 10.8 7.7-4.5m-7.7 6.9 7.7 4.5" />
              </svg>
            </span>
            <span>Compartilhar</span>
          </div>
        </div>
      </section>
    </main>
  );
};
