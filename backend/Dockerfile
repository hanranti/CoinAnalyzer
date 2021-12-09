FROM node:14.16-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

CMD if [ "${NODE_ENV}" != "development" ]; then \
    npm start; else \
    npm run dev; \
    fi