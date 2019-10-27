FROM node:10

WORKDIR /app

COPY ./app/package.json .
COPY ./app/package-lock.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD npm start
