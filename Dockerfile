FROM nginx
COPY release /usr/share/nginx/html
COPY nginx /etc/nginx
