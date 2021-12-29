set -e;

npm run lint-fix;
npm run build:ui;

./scripts/runTests.sh

git add -A;
git status;
echo "Check errors above!";
read -p "Commit changes? (Yy/Nn)" yn
case $yn in
  [Yy]* ) git commit;;
  [Nn]* ) exit;;
esac
