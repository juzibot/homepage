FROM 789252305933.dkr.ecr.cn-northwest-1.amazonaws.com.cn/jz-node-16.7.0-alpine-build:0.0.1
WORKDIR /usr/src/app

COPY . . 

RUN npm install && npm run build
EXPOSE 3000/tcp

CMD ["npm", "run", "start"]
