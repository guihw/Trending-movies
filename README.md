# 🎬 Trending Movies Project

Um aplicativo web que rastreia filmes em alta baseado nas pesquisas dos usuários em tempo real. Quanto mais um filme é pesquisado, maior sua posição no ranking de tendências.

## Project
https://github.com/user-attachments/assets/e12c474b-b3ae-492b-9c53-57c082543df7

https://github.com/user-attachments/assets/4138fd2a-d8d8-465e-a412-c591c3a084e3


## 🚀 Funcionalidades

- **Pesquisa em Tempo Real**: Busque filmes conforme você digita
- **Sistema de Trending**: Algoritmo que calcula popularidade baseado na frequência de pesquisas
- **Interface Responsiva**: Design moderno e intuitivo
- **Ranking Dinâmico**: Lista dos 5 filmes mais pesquisados
- **Dados Persistentes**: Todas as pesquisas são salvas no banco de dados

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server
- **CSS3** - Estilização customizada
- **Fetch API** - Requisições HTTP

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Habilitação de requisições cross-origin

### Arquitetura
- **MVC Pattern** - Separação de responsabilidades
- **RESTful API** - Endpoints padronizados
- **ES Modules** - Sintaxe moderna de importação

## 🔧 Instalação e Configuração

### Pré-requisitos
- Node.js (v16 ou superior)
- MongoDB (local ou MongoDB Atlas)
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/trending-movies-project.git
cd trending-movies-project

Configure o backend:
cd Backend
npm install

Crie um arquivo .env na pasta Backend:
DB_URL=mongodb://localhost:27017/trending-movies
PORT=3000

Configure o front-end:
cd ../Frontend
npm install
```
📖 API Endpoints
POST /search
Registra uma pesquisa de filme no sistema.

GET /trending
Retorna os 5 filmes mais pesquisados.

💡 Como Funciona

Pesquisa: Usuario digita o nome de um filme
Logging: Cada pesquisa é registrada no banco de dados
Contagem: Sistema incrementa contador para cada filme pesquisado
Ranking: Filmes são ordenados por número de pesquisas
Exibição: Top 5 filmes aparecem na seção "Trending"
