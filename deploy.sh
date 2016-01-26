#!/usr/bin/env bash

set -e

# Compile
gulp clean
gulp release --dist

# Build
docker build -t rocwang/cv .
docker push rocwang/cv

# Deploy
ssh root@rocwang.me /bin/bash <<EOF
docker tag rocwang/cv rocwang/cv-old
docker rename cv cv-old
docker pull rocwang/cv
docker stop cv-old
docker run -d -e VIRTUAL_HOST=cv.rocwang.me,rocwang.me,www.rocwang.me -e VIRTUAL_PROTO=https -e VIRTUAL_PORT=443 -e CERT_NAME=www.rocwang.me --name cv rocwang/cv
docker rm cv-old
docker rmi rocwang/cv-old
EOF

# Purge Cloudflare cache
curl -X DELETE \
    -H "X-Auth-Email: rocinwinter@gmail.com" \
    -H "X-Auth-Key: $(<cloudflare-api-key)" \
    -H "Content-Type: application/json" \
    --data '{"files":["https://rocwang.me/", "https://rocwang.me/index.html"]}' \
    "https://api.cloudflare.com/client/v4/zones/48a5ff753ce70f5261c0762c6bd03c34/purge_cache"

open https://rocwang.me/
