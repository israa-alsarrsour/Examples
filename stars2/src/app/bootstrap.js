var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var stars_app_1 = require('./components/stars-app');
//import {HeroService} from "./services/hero-service";
browser_1.bootstrap(stars_app_1.StarsApp, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=bootstrap.js.map