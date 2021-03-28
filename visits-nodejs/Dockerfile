FROM node:alpine

RUN mkdir -p /usr/src/app/visits

WORKDIR /usr/src/app/visits

COPY *.json /usr/src/app/visits

RUN npm install

COPY *.js /usr/src/app/visits

CMD ["npm","start"]