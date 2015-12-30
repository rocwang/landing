FROM nginx
COPY release /usr/share/nginx/html
COPY nginx /etc/nginx

RUN chown -R www-data:www-data /usr/share/nginx/html
