FROM nginx:1.11.4-alpine

COPY /etc/nginx /etc/nginx

COPY app /app
# COPY bower_components /app/bower_components

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
