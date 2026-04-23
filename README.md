# 🌤️ Weather Hub

Aplicação web de previsão do tempo construída com React, TypeScript e Vite. Exibe condições climáticas em tempo real para qualquer localização, com suporte à geolocalização do navegador e busca por cidade.

## ✨ Funcionalidades

- **Localização automática** — detecta a posição do usuário via geolocalização do navegador
- **Busca por cidade** — pesquise qualquer cidade do mundo
- **Clima atual** — temperatura, condição climática e ícone ilustrativo
- **Previsão de 5 dias** — resumo das condições para os próximos dias
- **Dados detalhados** — umidade, velocidade do vento, sensação térmica, índice UV, horários de nascer e pôr do sol
- **Mapa interativo** — mapa centralizado na localização consultada (Leaflet)
- **Cidades populares** — painel com o clima atual de Nova York, Paris, Tóquio, Londres e Rio de Janeiro

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| React | 19 |
| TypeScript | 5.8 |
| Vite | 7 |
| Tailwind CSS | 4 |
| React Leaflet | 5 |
| WeatherAPI | — |

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+
- Chave de API gratuita do [WeatherAPI](https://www.weatherapi.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/villarzz/weather-hub.git
cd weather-hub

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_API_KEY=sua_chave_aqui
```

### Executando em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint |

## 📁 Estrutura do projeto

```
src/
├── components/       # Componentes de UI (clima atual, previsão, mapa, etc.)
├── context/          # Contexto React para gerenciamento de estado do clima
├── interfaces/       # Tipos TypeScript para os dados da API
├── pages/            # Páginas da aplicação
├── styles/           # Estilos globais
└── utils/            # Funções utilitárias
```
