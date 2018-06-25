#!/usr/bin/env bash

# Purge Cloudflare cache
curl -X DELETE \
    -H "X-Auth-Email: rocinwinter@gmail.com" \
    -H "X-Auth-Key: $(<cloudflare-api-key)" \
    -H "Content-Type: application/json" \
    --data '{"files":["https://kiwiberry.nz/", "https://www.kiwiberry.nz/", "https://kiwiberry.nz/index.html", "https://www.kiwiberry.nz/index.html"]}' \
    "https://api.cloudflare.com/client/v4/zones/e2ef99d8481d672b6f80ff8b3577ab4a/purge_cache"

open https://kiwiberry.nz/
