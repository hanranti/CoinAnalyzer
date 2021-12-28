set -e;

cd frontend;
npm run lint-fix;
cd ../backend;
npm run lint-fix;
npm run build:ui
cd ..

./scripts/runTests.sh

git add -A;
git status;
echo "Check errors above!";
read -p "Commit changes? (Yy/Nn)" yn
case $yn in
  [Yy]* ) git commit;;
  [Nn]* ) exit;;
esac
