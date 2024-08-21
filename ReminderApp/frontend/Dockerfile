FROM node:20.11-alpine as react-build

WORKDIR /app

COPY . .

#RUN  NODE_ENV=development npm install

RUN npm install

EXPOSE 3000

RUN npm run build


# stage-2 : Create the production Image
FROM nginx:latest

COPY --from=react-build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
