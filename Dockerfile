FROM node:alpine
   
 RUN mkdir -p /usr/src/api  
 ENV YARN_CONFIG_PREFIX=/home/node/.yarn-global

 WORKDIR /usr/src/api  
 COPY api/package.json /usr/src/api/package.json  
 RUN yarn install 
   
 EXPOSE 3001
   
 CMD ["yarn", "start"]