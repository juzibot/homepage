FROM node:16.10.0-alpine3.11

ENV TIME_ZONE=Asia/Shanghai

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
  && echo "${TIME_ZONE}" > /etc/timezone \ 
  && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime 

WORKDIR /usr/src/app

COPY . . 

RUN npm install --registry=https://registry.npmmirror.com \
     && npm run build
EXPOSE 3000/tcp

CMD ["npm", "run", "start"]
