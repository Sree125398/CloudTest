FROM node:6-alpine
EXPOSE 8080
COPY node.js .
CMD node node.js
