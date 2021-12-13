set -e;

cd backend;
npm run lint-fix;
cd ../frontend;
npm run lint-fix;

git add -A;
git status;
echo "Check errors above!";
read -p "Commit changes? (Yy/Nn)" yn
case $yn in
  [Yy]* ) git commit;;
  [Nn]* ) exit;;
esac
