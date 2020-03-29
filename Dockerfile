FROM node:10.15.3-alpine

COPY package.json .

RUN ["npm", "install", "-g", "magic-home"]

RUN ["npm", "install"]

CMD ["npm", "version"]