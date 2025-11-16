# Imagem base do Node
FROM node:20

# Diretório dentro do container
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o servidor usa
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "index.js"]
