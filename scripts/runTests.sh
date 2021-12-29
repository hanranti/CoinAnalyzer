cd backend
npm test
cd ../frontend
npm test
cd ..
./scripts/startForTests.sh
sleep 5
npm test
docker-compose down -v