FROM node:14
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY . /usr/src/app
RUN rm -rf node_modules||true
RUN npm install --silent
RUN npm run build
CMD ["npm", "run", "start"]