#!/bin/bash
#生产环境第一次部署新包chmod 777 test.sh
rm -rf dist/
#npm config set registry https://registry.npm.taobao.org
npm install --registry=https://registry.npm.taobao.org
npm run build:test
#pm2 delete nodetouch01 nodetouch02
pm2 start ecosystemTEST.config.js
echo "=================deploy done!!!=================="
#npm config set unsafe-perm=true
#pm2 delete touchreact01 touchreact02 杀掉该应用启动的进程
