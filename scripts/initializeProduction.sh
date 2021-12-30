./scripts/installAndBuild.sh

cd data/populate/

STAGING=1 node populateProduction.js

cd ../..