FROM node:10.15.3-slim

RUN npm install -g pkg

COPY "entrypoint.sh" "/entrypoint.sh"

ENTRYPOINT [ "/entrypoint.sh" ]