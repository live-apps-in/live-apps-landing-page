FROM node:14-alpine
WORKDIR /usr/src/live_apps_landing_page
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm i -g serve
CMD [ "serve", "-s", "build" ]