
// the polyfills must be the first thing imported in node.js
import 'angular2-universal-polyfills';
import * as path from 'path';
import * as express from 'express';
import { enableProdMode } from '@angular/core';
import { createEngine } from 'angular2-express-engine';

import { MainModule } from './main.node';

enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

app.engine('.html', createEngine({}));
app.set('views', __dirname);
app.set('view engine', 'html');

// Serve static files
let staticPath = path.join(__dirname, 'assets');
app.use('/assets', express.static(staticPath, { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));

app.get('*', (req, res) => {
  res.render('index', {
    req: req,
    res: res,
    ngModule: MainModule,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: 'http://localhost:3000/'
  });
});

// Server
let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);

  /*setTimeout(() => {
    generateStaticWebsite('localhost', server.address().port, APP_ROUTES, './static-website/', './src/assets');
  }, 2000);*/
});

