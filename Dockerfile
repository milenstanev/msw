FROM node:5.11.1
COPY . /usr/local/milenstanev-msw
WORKDIR /usr/local/milenstanev-msw
RUN npm install
CMD ["npm", "serve"]