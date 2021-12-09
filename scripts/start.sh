./scripts/installAndBuild.sh

docker-compose down
docker-compose up -d coin-analyzer-db
sleep 5
docker-compose exec -T -u postgres coin-analyzer-db psql -c "CREATE DATABASE \"coin-analyzer-db\""
docker-compose up