# Roc's CV Site

This is the source code of my CV site.
Please see [https://rocwang.me](https://rocwang.me)

## Setup development environment

    $ npm install
    $ gulp watch

## Release Procedure

1. Compile

        $ gulp release --dist

2. Save the PDF version by printing in Chrome, overwriting "rocwang.pdf"

3. Put the site private key "rocwang.me.key" in "nginx/ssl"

4. Build the Docker image and push it to Docker Hub

        $ docker build -t rocwang/cv .
        $ docker push rocwang/cv

5. Deploy to live server

        $ docker pull rocwang/cv
        $ docker rm -f cv
        $ docker run -d -e VIRTUAL_HOST=cv.rocwang.me,rocwang.me,www.rocwang.me -e VIRTUAL_PROTO=https -e VIRTUAL_PORT=443 -e CERT_NAME=www.rocwang.me --name cv rocwang/cv

6. Purge Cloudflare cache

    * https://rocwang.me/
    * https://rocwang.me/index.html
