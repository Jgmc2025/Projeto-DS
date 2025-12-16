# Usa uma imagem leve do Node
FROM node:22-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# 1. Copia APENAS os arquivos de dependência primeiro
COPY package.json package-lock.json ./

# 2. Instala as dependências (Isso cria a node_modules DO LINUX)
RUN npm install

# 3. Copia todo o resto do projeto para dentro
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Comando para iniciar
CMD ["npm", "run", "dev", "--", "--host"]