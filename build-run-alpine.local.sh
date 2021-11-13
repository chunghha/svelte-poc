#!/usr/bin/env bash

docker build -t svelte-poc -f ./Dockerfile.local.alpine .
docker run -d -p 3000:3000 -e NODE_ENV=dev -m 512m svelte-poc

# attach shell and verify memory
# cat /sys/fs/cgroup/memory/memory.limit_in_bytes
