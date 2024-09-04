# Stage 1: Build the React app
FROM node:14 AS build

WORKDIR /usr/src/app


# create attendence user and group
RUN groupadd -g 10001 attendence && \
   useradd -u 10000 -g attendence attendence && \
   chown -R attendence:attendence /usr/src/app


COPY package.json package-lock.json ./
RUN npm install

COPY . ./

#ENV API=http://backend:8000

RUN npm run build 

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

