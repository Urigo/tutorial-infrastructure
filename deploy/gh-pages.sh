cd ./static-website
rm -rf .git
git init
git remote add origin https://github.com/Urigo/angular-meteor-docs.git
git checkout --orphan gh-pages
git add *
git commit --all --m "$(date)"
git push --set-upstream origin gh-pages:gh-pages
