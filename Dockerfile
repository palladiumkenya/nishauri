FROM node:12.16.3 AS builder

WORKDIR /app

ADD package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:1.19-alpine AS server
COPY --from=builder ./app/dist /usr/share/nginx/html


RUN rm -f /etc/nginx/conf.d/default.conf
COPY docker/assets/nginx/default.conf /etc/nginx/conf.d
RUN mkdir -p /var/www
COPY docker/assets/nginx/health.html /var/www



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
