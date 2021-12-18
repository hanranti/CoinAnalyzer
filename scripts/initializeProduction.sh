./scripts/installAndBuild.sh

psql -c "CREATE DATABASE IF NOT EXISTS \"coin-analyzer-db\""

cd data/populate/

node populateProduction.js