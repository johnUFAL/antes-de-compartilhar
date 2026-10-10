import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// Moldura única das três telas: largura de celular centralizada.
export default function PhoneFrame({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-zap-fundo shadow-xl">
      {children}
    </div>
  );
}
