import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { ChatScreen } from '../components/ChatScreen';
import { MessageBubble } from '../components/MessageBubble';
import { AppProvider } from '../context/AppContext';
import { SCENARIOS } from '../data/scenarios';

const renderizarComProvedor = (ui: React.ReactElement) =>
  render(<AppProvider>{ui}</AppProvider>);

describe('Tela de conversa', () => {
  it('exibe o título e o grupo do cenário atual', () => {
    renderizarComProvedor(<ChatScreen />);
    const cenario = SCENARIOS[0];

    expect(screen.getByRole('heading', { name: 'Simulador de Chat' })).toBeDefined();
    expect(screen.getByRole('heading', { name: cenario.grupo })).toBeDefined();
  });

  it('exibe a mensagem fictícia e o horário assim que a tela carrega', () => {
    renderizarComProvedor(<ChatScreen />);
    const cenario = SCENARIOS[0];

    expect(screen.getByText(cenario.conteudo.texto ?? '')).toBeDefined();
    expect(screen.getByText(cenario.horario)).toBeDefined();
    expect(screen.getByText('Hoje')).toBeDefined();
  });

  it('apresenta as quatro ações visuais na barra inferior', () => {
    renderizarComProvedor(<ChatScreen />);

    expect(screen.getByText('Pesquisar')).toBeDefined();
    expect(screen.getByText('Ignorar')).toBeDefined();
    expect(screen.getByText('Denunciar')).toBeDefined();
    expect(screen.getByText('Compartilhar')).toBeDefined();
  });
});

describe('Pré-visualizações de mídia', () => {
  it('mostra um card de imagem simulada para os cenários com imagem', () => {
    const cenariosComImagem = SCENARIOS.filter(
      (cenario) => cenario.conteudo.tipo === 'imagem',
    );

    expect(cenariosComImagem).toHaveLength(3);
    cenariosComImagem.forEach((cenario) => {
      const { unmount } = render(<MessageBubble scenario={cenario} isSender={false} />);
      expect(screen.getByRole('img', { name: cenario.conteudo.texto })).toBeDefined();
      unmount();
    });
  });

  it('mostra uma miniatura com duração para os cenários com vídeo', () => {
    const cenariosComVideo = SCENARIOS.filter(
      (cenario) => cenario.conteudo.tipo === 'video',
    );

    expect(cenariosComVideo).toHaveLength(2);
    cenariosComVideo.forEach((cenario) => {
      const { unmount } = render(<MessageBubble scenario={cenario} isSender={false} />);
      expect(
        screen.getByRole('img', {
          name: `Prévia de vídeo: ${cenario.conteudo.texto}`,
        }),
      ).toBeDefined();
      expect(screen.getByText(cenario.conteudo.duracao ?? '')).toBeDefined();
      unmount();
    });
  });

  it('mostra uma forma de onda com duração para os cenários com áudio', () => {
    const cenariosComAudio = SCENARIOS.filter(
      (cenario) => cenario.conteudo.tipo === 'audio',
    );

    expect(cenariosComAudio).toHaveLength(2);
    cenariosComAudio.forEach((cenario) => {
      const { unmount } = render(<MessageBubble scenario={cenario} isSender={false} />);
      expect(
        screen.getByRole('group', {
          name: `Áudio simulado: ${cenario.conteudo.texto}`,
        }),
      ).toBeDefined();
      expect(screen.getByText(cenario.conteudo.duracao ?? '')).toBeDefined();
      unmount();
    });
  });

  it('renderiza todos os cenários de texto sem pré-visualização de mídia', () => {
    const cenariosDeTexto = SCENARIOS.filter(
      (cenario) => cenario.conteudo.tipo === 'texto',
    );

    expect(cenariosDeTexto).toHaveLength(3);
    cenariosDeTexto.forEach((cenario) => {
      const { unmount } = render(<MessageBubble scenario={cenario} isSender={false} />);
      expect(screen.getByText(cenario.conteudo.texto ?? '')).toBeDefined();
      expect(screen.queryByRole('img')).toBeNull();
      unmount();
    });
  });
});
