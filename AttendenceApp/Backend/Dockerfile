FROM node:20-alpine

WORKDIR /usr/src/app

# Install necessary packages
RUN apk add --no-cache shadow 

# create attendence user and group
RUN groupadd -g 10001 attendence && \
   useradd -u 10000 -g attendence attendence 
   

COPY . .

#ENV POSTGRES_USER=admin
#ENV POSTGRES_PASSWORD=Attendence
#ENV POSTGRES_DB=postgres 
#ENV POSTGRES_HOST=pgAttendence
#ENV POSTGRES_PORT=5432
# ENV FRONTEND=http://frontend:3000

RUN  npm install 

EXPOSE 8000

RUN chown -R attendence:attendence /usr/src/app

# Ensure the home directory is writable
RUN mkdir -p /home/attendence/.npm/_logs && chown -R attendence:attendence /home/attendence

# Switch to the attendence user   
USER attendence

CMD [ "index.js" ]

ENTRYPOINT [ "node" ]