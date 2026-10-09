import React from 'react';
import { Play, Volume2 } from 'lucide-react';
import type { Scenario } from '../types/scenario';

interface MessageBubbleProps {
  scenario: Scenario;
  isSender: boolean;
}

function ImagePreview({ scenario }: { scenario: Scenario }) {
  return (
    <div
      className="message-media message-media--image"
      role="img"
      aria-label={scenario.conteudo.texto ?? 'Imagem simulada'}
    >
      <div className="message-media__image-topline">
        <span>PLANTÃO</span>
        <span>NOTÍCIAS</span>
      </div>
      <div className="message-media__image-content">
        <span className="message-media__image-kicker">CIRCULANDO NAS REDES</span>
        <span className="message-media__image-headline">
          {scenario.conteudo.texto ?? 'Imagem compartilhada no grupo'}
        </span>
        <span className="message-media__image-caption">O que você precisa saber</span>
      </div>
      <span className="message-media__image-source">IMAGEM SIMULADA</span>
    </div>
  );
}

function VideoPreview({ scenario }: { scenario: Scenario }) {
  return (
    <div
      className="message-media message-media--video"
      role="img"
      aria-label={`Prévia de vídeo: ${scenario.conteudo.texto ?? ''}`}
    >
      <span className="message-media__video-label">VÍDEO</span>
      <span className="message-media__play" aria-hidden="true">
        <Play className="h-6 w-6 fill-current" />
      </span>
      <span className="message-media__duration">{scenario.conteudo.duracao ?? '0:00'}</span>
      <span className="message-media__video-caption">
        {scenario.conteudo.texto ?? 'Vídeo compartilhado no grupo'}
      </span>
    </div>
  );
}

function AudioPreview({ scenario }: { scenario: Scenario }) {
  const alturas = [
    9, 17, 12, 23, 15, 28, 18, 11, 21, 14, 25, 10, 19, 13, 27, 16, 22, 9,
    18, 12, 24, 15, 20, 10, 17, 26, 13, 21, 11, 18, 23, 14,
  ];

  return (
    <div
      className="message-media message-media--audio"
      role="group"
      aria-label={`Áudio simulado: ${scenario.conteudo.texto ?? ''}`}
    >
      <span className="message-media__audio-play" aria-hidden="true">
        <Play className="h-5 w-5 fill-current" />
      </span>
      <div className="message-media__audio-track">
        <div className="message-media__waveform" aria-hidden="true">
          {alturas.map((altura, index) => (
            <span key={index} style={{ height: `${altura}px` }} />
          ))}
        </div>
        <div className="message-media__audio-meta">
          <span>Áudio encaminhado</span>
          <span>{scenario.conteudo.duracao ?? '0:00'}</span>
        </div>
      </div>
      <Volume2 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#86968d]" />
    </div>
  );
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ scenario, isSender }) => {
  const { tipo, texto } = scenario.conteudo;

  return (
    <div className={`mb-4 flex ${isSender ? 'justify-end' : 'justify-start'}`}>
      <article
        className={`message-bubble ${
          isSender ? 'message-bubble--sender' : 'message-bubble--received'
        }`}
      >
        {tipo !== 'texto' && (
          <div className="message-bubble__sender">
            {scenario.remetente}
          </div>
        )}
        {tipo === 'imagem' && <ImagePreview scenario={scenario} />}
        {tipo === 'video' && <VideoPreview scenario={scenario} />}
        {tipo === 'audio' && <AudioPreview scenario={scenario} />}
        {texto && (
          <p className={tipo === 'texto' ? 'message-bubble__text' : 'message-bubble__caption'}>
            {texto}
          </p>
        )}
        <time className="message-bubble__time">{scenario.horario}</time>
      </article>
    </div>
  );
};
