# Documentação Técnica - Ferramentas e Dependências

Este documento detalha as ferramentas, bibliotecas e frameworks utilizados no projeto **Antes de Compartilhar**, fornecendo as versões e os comandos necessários para instalação.

## Guia de Instalação Passo a Passo

Para configurar o ambiente de desenvolvimento do zero, siga a ordem abaixo:

### 1. Ambiente Base
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Instalação de Dependências
Execute o comando abaixo na raiz do projeto para instalar todas as bibliotecas listadas no `package.json`:

```bash
npm install
```

---

## Stack Tecnológica

### Core Frameworks & Linguagens
| Ferramenta | Versão | Descrição | Comando de Instalação |
| :--- | :--- | :--- | :--- |
| **React** | `^19.2.8` | Biblioteca para construção de interfaces | `npm install react react-dom` |
| **TypeScript** | `~6.0.2` | Superconjunto JavaScript com tipagem estática | `npm install -D typescript` |
| **Vite** | `^8.2.2` | Build tool rápida para frontend moderno | `npm install -D vite` |

### Estilização (UI/UX)
| Ferramenta | Versão | Descrição | Comando de Instalação |
| :--- | :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.19` | Framework de CSS utilitário | `npm install -D tailwindcss postcss autoprefixer` |
| **Lucide React** | `^1.45.0` | Conjunto de ícones leves e consistentes | `npm install lucide-react` |

### Qualidade de Código & Linting
| Ferramenta | Versão | Descrição | Comando de Instalação |
| :--- | :--- | :--- | :--- |
| **ESLint** | `^10.10.0` | Linter para encontrar e corrigir erros no JS/TS | `npm install -D eslint` |
| **Husky** | `^9.1.7` | Hooks de Git para automação de pré-commit | `npm install -D husky` |
| **lint-staged** | `^17.5.1` | Executa linters apenas em arquivos modificados | `npm install -D lint-staged` |
| **oxlint** | `^1.79.0` | Linter extremamente rápido escrito em Rust | `npm install -D oxlint` |

### Testes Automatizados
| Ferramenta | Versão | Descrição | Comando de Instalação |
| :--- | :--- | :--- | :--- |
| **Vitest** | `^5.0.0` | Framework de testes unitários rápido para Vite | `npm install -D vitest` |
| **React Testing Library**| `^16.3.3` | Utilitários para testar componentes React | `npm install -D @testing-library/react @testing-library/jest-dom` |
| **jsdom** | `^29.1.1` | Implementação de DOM em JavaScript para testes | `npm install -D jsdom` |

---

## Scripts Úteis

Para facilitar o uso das ferramentas acima, utilize os seguintes comandos:

- **Desenvolvimento:** `npm run dev`
- **Build de Produção:** `npm run build`
- **Executar Lint:** `npm run lint`
- **Executar Testes:** `npm run test`
