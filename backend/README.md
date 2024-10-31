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
    POSTGRES_USER=<seu_nome_de_usuario_aqui>
    POSTGRES_PASSWORD=<sua_senha_aqui>
    POSTGRES_HOST=db
    POSTGRES_PORT=5432
    ```

2. **Banco de Dados**: O projeto está configurado para usar o PostgreSQL como banco de dados, rodando em um container Docker.

### Inicializando o Projeto com Docker

No terminal, navegue até o diretório `back-end/` e execute o seguinte comando para iniciar os serviços:

```bash
docker-compose up --build
```
### Esse comando irá:

Construir o container do backend Django.
Subir o container do banco de dados PostgreSQL.
Rodar as migrações automaticamente.
Após a inicialização, o backend estará disponível em http://localhost:8000.

Rotas da API
Abaixo estão as principais rotas disponíveis na API:
| Rota             | Método | Descrição                        |
|------------------|--------|----------------------------------|
| `/api/token`     | POST   | Realiza login e gera token JWT. |
| `/api/users`     | GET    | Lista todos os usuários.        |
| `/api/users`     | POST   | Cria um novo usuário.           |
| `/api/contacts`  | GET    | Lista todos os contatos.        |
| `/api/contacts`  | POST   | Cria um novo contato.           |
| `/api/experience`| GET    | Lista todas as experiências.    |
| `/api/experience`| POST   | Cria uma nova experiência.      |
| `/api/education` | GET    | Lista todas as formações.       |
| `/api/education` | POST   | Cria uma nova formação.         |

### Autenticação
Esta API usa autenticação JWT para proteger as rotas. Para acessar as rotas protegidas, siga os passos:

Obtenha um token JWT enviando uma solicitação POST para /api/token com as credenciais do usuário.

Inclua o token no cabeçalho Authorization em todas as solicitações subsequentes, usando o formato:

Authorization: Bearer <seu_token_jwt>

### Comandos Úteis
Para aplicar migrações manualmente:
docker-compose run djangoapp python manage.py migrate

Para acessar o shell do Django:
docker-compose run djangoapp python manage.py shell

Para criar um superusuário:
docker-compose run djangoapp python manage.py createsuperuser


