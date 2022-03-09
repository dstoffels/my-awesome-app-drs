FROM node:10 as build
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci
COPY ./ ./

RUN npm run build

FROM nginx:stable-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off" ]