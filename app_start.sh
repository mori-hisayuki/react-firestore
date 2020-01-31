pushd ./docker

docker network remove react-net
docker network create react-net

docker-compose build
docker-compose up -d
