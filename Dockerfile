FROM nginx:alpine
COPY release /usr/share/nginx/html
COPY nginx /etc/nginx

RUN chown -R nginx:nginx /usr/share/nginx/html
