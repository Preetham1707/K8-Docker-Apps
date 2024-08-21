FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache shadow 


# create attendence user and group
RUN groupadd -g 10001 reminder && \
   useradd -u 10000 -g reminder reminder 
  
COPY . .   

ENV DB=mongodb

RUN  npm install

EXPOSE 80

RUN chown -R reminder:reminder /app

# Switch to the attendence user   
USER reminder

CMD [ "app.js" ]

ENTRYPOINT [ "node" ]