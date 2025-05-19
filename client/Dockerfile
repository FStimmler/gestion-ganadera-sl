FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Opción para desarrollo:
CMD ["npm", "run", "dev"]
