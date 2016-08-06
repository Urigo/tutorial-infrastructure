const fs = require("fs");
const request = require("request");
const mkdirp = require("mkdirp");
const path = require("path");
const _ = require("lodash");
const rimraf = require("rimraf");

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export function generateStaticWebsite(baseHost, port, routesArray, outputLocation) {
  function generateStaticForUrl(fullBaseUrl, urlPath): Promise<string> {
    let url = fullBaseUrl + urlPath;

    return new Promise((resolve, reject) => {
      request(url, (err, res) => {
        if (err) {
          return reject(err);
        }

        console.log("Done loading HTML content for " + url);
        resolve({
          html: res.body,
          url: urlPath
        });
      });
    })
  }

  rimraf.sync("Cleaning output directory: " + outputLocation);

  let fullBaseUrl = "http://" + baseHost + ":" + port;
  let urlsToLoad = ["/"];
  let promises = [];

  routesArray.forEach((route: any) => {
    if (route.path != "**") {
      urlsToLoad.push("/" + route.path);
    }
  });

  urlsToLoad.forEach((url) => {
    console.log("Generating static file for: " + url);
    promises.push(generateStaticForUrl(fullBaseUrl, url));
  });

  return Promise
    .all(promises)
    .then((allResults) => {
      _.forEach(allResults, (result) => {
        let filePath = result.url;

        if (filePath === "/") {
          filePath = "index";
        }

        filePath = filePath + ".html";
        let fullFilePath = path.join(outputLocation, filePath);
        mkdirp.sync(path.dirname(fullFilePath));
        fs.writeFileSync(fullFilePath, result.html);
        console.log("Done writing to file:" + fullFilePath);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}