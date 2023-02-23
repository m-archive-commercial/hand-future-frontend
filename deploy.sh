# build at local, and upload the static files (exclude `cache`) to the server
yarn build
rsync -chavzP -e "ssh -i ~/Projects/HandFuture/servers/llfx_mentalcare" --exclude .next/cache  .next root@82.157.185.34:/root/hand-future-frontend/
