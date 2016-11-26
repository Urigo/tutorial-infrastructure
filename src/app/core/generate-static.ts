const fs = require('fs');
const request = require('request');
const mkdirp = require('mkdirp');
const path = require('path');
const rimraf = require('rimraf');
const copydir = require('copy-dir');
const moment = require('moment');

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export let handleRoutesArray = (arr, resultArr, base = '/') => {
  arr.forEach((route: any) => {
    if (route.path !== '**') {
      resultArr.push(base + route.path);

      if (route.children && route.children.length > 0) {
        handleRoutesArray(route.children, resultArr, base + route.path + '/');
      }
    }
  });
};

export function generateStaticWebsite(baseHost, port, routesArray, outputLocation, assetsDirectory) {
  let siteMapArr = [];

  function generateSiteMap(pathArr: string[]) {
    console.log("Generating sitemap.xml file");

    return new Promise((resolve) => {
      let base = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

      pathArr.forEach((path) => {
        let priority;
        let depth = (path.split('/') || []).length;

        if (depth === 0 || depth === 1) {
          priority = "1.0"
        }
        else if (depth === 2) {
          priority = "0.8"
        }
        else {
          priority = "0.5";
        }

        base += `
    <url>
        <loc>http://angular-meteor.com${path}</loc>
        <lastmod>${ moment().format('YYYY-MM-DD') }</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${ priority }</priority>
    </url>`
      });

      base += `</urlset>`;

      let fullFilePath = path.join(outputLocation, 'sitemap.xml');
      fs.writeFileSync(fullFilePath, base);

      resolve();
    });
  }

  function generateStaticForUrl(fullBaseUrl, urlPath): Promise<string> {
    let url = fullBaseUrl + urlPath;

    return new Promise((resolve, reject) => {
      request(url, (err, res) => {
        if (err) {
          return reject(err);
        }

        console.log('Done loading HTML content for ' + url);
        resolve({
          html: res.body,
          url: urlPath
        });
      });
    });
  }

  rimraf.sync(outputLocation);
  copydir.sync(assetsDirectory, path.join(outputLocation, path.basename(assetsDirectory)), function (stat, filepath, filename) {
    if (stat === 'file' && (path.extname(filepath) === '.md' || path.extname(filepath) === '.patch')) {
      return false;
    }

    return true;
  });

  let fullBaseUrl = 'http://' + baseHost + ':' + port;
  let urlsToLoad = ['/'];

  handleRoutesArray(routesArray, urlsToLoad);

  let r;
  let donePromise = new Promise((resolve) => {
    r = resolve;
  });

  function runNext(arr, i = 0) {
    if (arr[i]) {
      generateStaticForUrl(fullBaseUrl, arr[i]).then((result: any) => {
        let filePath = result.url;

        if (filePath === '/') {
          filePath = 'index';
        }

        siteMapArr.push(filePath);

        filePath = filePath + '.html';
        let fullFilePath = path.join(outputLocation, filePath);
        mkdirp.sync(path.dirname(fullFilePath));
        fs.writeFileSync(fullFilePath, result.html);
        console.log('Done writing to file:' + fullFilePath);

        runNext(arr, i + 1);
      });
    } else {
      generateSiteMap(siteMapArr).then(() => {
        r();
      });
    }

    return donePromise;
  }

  return runNext(urlsToLoad);
}
