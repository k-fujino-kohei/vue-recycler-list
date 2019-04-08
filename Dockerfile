FROM node:lts-alpine

WORKDIR /app/

COPY ./package.json ./app/

RUN apk update && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh && \
    yarn
