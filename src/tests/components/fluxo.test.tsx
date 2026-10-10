import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { AppProvider } from '../../context/AppContext';
import { SCENARIOS } from '../../data/scenarios';

function renderizar() {
  return render(
    <AppProvider>
      <App />
    </AppProvider>,
  );
}

describe('fluxo completo do app', () => {
  it('percorre intro -> chat -> feedback -> resumo -> recomeçar', async () => {
    renderizar();

    // Intro
    expect(screen.getByRole('heading', { name: /antes de compartilhar/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /começar/i }));

    for (let i = 0; i < SCENARIOS.length; i++) {
      // Aparece a mensagem após o "digitando..."
      const mensagem = await screen.findByRole('article', {}, { timeout: 3000 });
      expect(mensagem).toHaveAccessibleName(new RegExp(SCENARIOS[i].remetente));

      const pesquisar = screen.getByRole('button', { name: /pesquisar a mensagem/i });
      fireEvent.click(pesquisar);

      // Botões ficam desabilitados e o feedback aparece
      expect(screen.getByRole('button', { name: /compartilhar a mensagem/i })).toBeDisabled();
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText(SCENARIOS[i].sinalDeAlerta)).toBeInTheDocument();

      fireEvent.click(
        screen.getByRole('button', {
          name: i === SCENARIOS.length - 1 ? /ver resumo/i : /próxima mensagem/i,
        }),
      );
    }

    // Resumo
    expect(screen.getByRole('heading', { name: /resumo/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /recomeçar/i }));
    expect(screen.getByRole('button', { name: /começar/i })).toBeInTheDocument();
  }, 30000);

  it('compartilhar gera feedback de ação arriscada', async () => {
    renderizar();
    fireEvent.click(screen.getByRole('button', { name: /começar/i }));
    await screen.findByRole('article', {}, { timeout: 3000 });
    fireEvent.click(screen.getByRole('button', { name: /compartilhar a mensagem/i }));
    expect(screen.getByRole('heading', { name: /ação arriscada/i })).toBeInTheDocument();
  });
});
