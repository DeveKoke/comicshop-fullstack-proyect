FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install concurrently

CMD ["npm", "run", "dev"]

EXPOSE 3000