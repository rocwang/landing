# Roc's CV Site

This is the source code of my CV site.
Please see [https://rocwang.me](https://rocwang.me)

## Setup development environment

    $ sudo gem install scss_lint
    $ npm install
    $ gulp watch

## Release Procedure

1. Put the site private key `rocwang.me.key` in `nginx/ssl`
2. Put the Cloudflare API key into `cloudflare-api-key`
3. Run `deploy.sh` in project root
