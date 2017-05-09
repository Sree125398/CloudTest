FROM node:6-alpine
COPY node.js /app/
CMD ["node", "/app/node.js"]