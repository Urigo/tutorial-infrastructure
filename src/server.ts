// the polyfills must be the first thing imported in node.js
import 'angular2-universal-polyfills';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { enableProdMode } from '@angular/core';
import { createEngine } from 'angular2-express-engine';
import { generateStaticWebsite, handleRoutesArray } from './app/core/generate-static';
import { APP_ROUTES } from './app/app-routes';
import { main } from './main.node';

enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

app.engine('.html', createEngine({ main }));
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));

// Routes with html5pushstate
// ensure routes match client-side-app
app.get('*', (req, res) => res.render('index', { req, res }));

// Server
let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);

  /*setTimeout(() => {
    generateStaticWebsite('localhost', server.address().port, APP_ROUTES, './static-website/', './src/assets');
  }, 2000);*/
});

