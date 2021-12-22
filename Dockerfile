FROM node:16.10.0-alpine3.11

ENV TIME_ZONE=Asia/Shanghai

RUN \
  mkdir -p /usr/src/app \
  && apk add --no-cache tzdata curl python3 musl make && ln -sf python3 /usr/bin/python \
  && echo "${TIME_ZONE}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime

WORKDIR /usr/src/app

COPY . . 

RUN npm install --registry=https://registry.npmmirror.com \
     && npm run build
EXPOSE 3000/tcp

CMD ["npm", "run", "start"]
