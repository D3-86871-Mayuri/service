FROM node
WORKDIR /SRC
COPY . .
RUN npm install express
EXPOSE 4000
CMD node server.js

