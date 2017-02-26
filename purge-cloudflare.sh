#!/usr/bin/env bash

# Purge Cloudflare cache
curl -X DELETE \
    -H "X-Auth-Email: rocinwinter@gmail.com" \
    -H "X-Auth-Key: $(<cloudflare-api-key)" \
    -H "Content-Type: application/json" \
    --data '{"files":["https://rocwang.me/", "https://rocwang.me/index.html"]}' \
    "https://api.cloudflare.com/client/v4/zones/48a5ff753ce70f5261c0762c6bd03c34/purge_cache"

open https://www.rocwang.me/
