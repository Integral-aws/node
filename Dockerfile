FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server/server
EXPOSE 3000