# Desafio Dev Django - Backend API

Este projeto é um backend construído em Django e Django REST Framework (DRF) que oferece uma API com várias funcionalidades de cadastro de usuários, contatos, experiências e educação. Ele está configurado para ser executado em um ambiente Docker.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- **back-end/**: contém o código do backend com Django e Django REST Framework.
- **front-end/**: contém a aplicação frontend com React, construída com Vite.

## Configuração e Início Rápido

### Pré-requisitos

- **Docker**: Certifique-se de ter o Docker instalado em sua máquina. Você pode instalar o Docker seguindo as instruções disponíveis em [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

### Configuração do Ambiente

1. **Variáveis de Ambiente**: Crie um arquivo `.env` no diretório `back-end/`. Este arquivo deve conter as seguintes variáveis:

    ```env
    SECRET_KEY=<sua_chave_secreta_django>
    DEBUG=True
    ALLOWED_HOSTS=127.0.0.1,localhost
    POSTGRES_DB_NAME=phego_db
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=admin
    POSTGRES_HOST=db
    POSTGRES_PORT=5432
    ```

2. **Banco de Dados**: O projeto está configurado para usar o PostgreSQL como banco de dados, rodando em um container Docker.

### Inicializando o Projeto com Docker

No terminal, navegue até o diretório `back-end/` e execute o seguinte comando para iniciar os serviços:

```bash
docker-compose up --build
