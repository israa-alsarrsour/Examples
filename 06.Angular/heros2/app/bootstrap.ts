import {provide} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HeroApp} from './components/hero-app'
import {HeroService} from "./services/hero-service";

/*
 During the application bootstrap we specify dependencies of the HeroApp in the square brackets.
 Providers are used to register objects for dependency injection.
 At this point we want Angular to instantiate the router objects using the definitions
 from ROUTER_PROVIDERS. While the default location strategy is PathLocationStrategy,
 we’re using the class HashLocationStrategy for hash-based routing.

 The location strategy defines how the application will interact with browser’s URL.
 We use HashLocationStrategy, which means that if we configure the router with the fragment
 ‘/hero’, Angular will add the hash sign and this fragment to the base URL.
 The browser will treat the fragment after the hash sign as an identifier of
 a specific client-side route.
 */
bootstrap(HeroApp,
    [
        HeroService,
        ROUTER_PROVIDERS, HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
);
