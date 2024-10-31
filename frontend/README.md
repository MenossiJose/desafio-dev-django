# Frontend - ReactJS com Tailwind CSS

Este projeto é o frontend da aplicação, desenvolvido em **ReactJS** com **Tailwind CSS** para a estilização. Ele é responsável pela interface com o usuário e interage com o backend através de uma API.

## Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:
frontend  
├── .vscode/  
├── node_modules/  
├── public/  
├── src/  
│   ├── assets/  
│   │   ├── fonts/  
│   │   └── images/  
│   ├── contexts/  
│   │   └── AuthContext.js  
│   ├── pages/  
│   │   ├── Contatos.js  
│   │   ├── Home.js  
│   │   ├── Login.js  
│   │   └── Registro.js  
│   ├── services/  
│   │   └── api.js  
│   ├── App.test.js  
│   ├── index.css  
│   ├── index.js  
│   ├── reportWebVitals.js  
│   └── setupTests.js  
├── Dockerfile  
├── package-lock.json  
├── package.json  
├── README.md  
└── tailwind.config.js  

### Descrição das Pastas e Arquivos Principais

- **src/assets**: Contém arquivos estáticos, como imagens e fontes.
- **src/contexts**: Contém os contextos de autenticação, como `AuthContext.js`.
- **src/pages**: Contém as páginas principais da aplicação:
  - `Home.js`: Página inicial.
  - `Contatos.js`: Página de contatos.
  - `Login.js`: Página de login.
  - `Registro.js`: Página de registro de novos usuários.
- **src/services**: Contém os serviços para comunicação com a API, como `api.js`.
- **tailwind.config.js**: Arquivo de configuração do Tailwind CSS.
- **Dockerfile**: Configuração para containerização da aplicação.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Docker**: Usado para containerizar a aplicação.

## Configuração e Execução

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. [Instruções de instalação](https://nodejs.org/).
- **Docker** (opcional): Se desejar executar a aplicação em um container Docker, instale o Docker. [Instruções de instalação](https://docs.docker.com/get-docker/).

### Instalação

No terminal, navegue até o diretório `frontend/` e execute:

```bash
npm install

```
### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

A aplicação estará disponível em http://localhost:3000.

### Executando com Docker

```bash
docker-compose up --build
```

O frontend está conectado no docker-compose.yml, então irá subir junto com demais imagens.
