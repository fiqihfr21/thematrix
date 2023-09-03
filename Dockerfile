FROM node:alpine

ENV NODE_ENV=development
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=postgres
ENV DB_DATABASE=matrixtest
ENV JWT_SECRET='863cc4f3-3edf-4cec-b298-30c29feeb19a'

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]