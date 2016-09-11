FROM node:argon

ADD ./ /app
RUN apt-get update
ENV app /bootstrap
WORKDIR ${app}

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
