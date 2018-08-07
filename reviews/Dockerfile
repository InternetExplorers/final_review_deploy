

FROM node:latest


WORKDIR ./
COPY . .


RUN npm install
RUN npm run prod



EXPOSE 3004
CMD ["npm", "run", "start"]