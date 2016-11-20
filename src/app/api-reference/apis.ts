import {createApiRoutes} from '../core/apis-routes';
import {ANGULAR2_METEOR_API_REFERENCE} from './angular2-meteor-api';
import {ANGULAR1_METEOR_API_REFERENCE} from './angular1-meteor-api';
import {ApiPageContainerComponent} from '../website/api-container/api-container.component';
import {METEOR_RXJS_API_REFERENCE} from "./meteor-rxjs-api";

export const APIS_ROUTES = [{
  path: 'api',
  children: [
    {
      path: 'angular2-meteor',
      component: ApiPageContainerComponent,
      children: createApiRoutes(ANGULAR2_METEOR_API_REFERENCE)
    },
    {
      path: 'angular-meteor',
      component: ApiPageContainerComponent,
      children: createApiRoutes(ANGULAR1_METEOR_API_REFERENCE)
    },
    {
      path: 'meteor-rxjs',
      component: ApiPageContainerComponent,
      children: createApiRoutes(METEOR_RXJS_API_REFERENCE)
    }
  ]
}];
