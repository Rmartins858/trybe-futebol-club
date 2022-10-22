FROM node:16-alpine

EXPOSE 3001

WORKDIR /app-backend

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "dev"]