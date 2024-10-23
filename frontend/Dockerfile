# Usar uma imagem base do Node.js com Alpine para ser leve
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo de dependências para o container
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código do projeto para o container
COPY . .

# Expor a porta que o servidor de desenvolvimento React usará
EXPOSE 3000

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "start"]