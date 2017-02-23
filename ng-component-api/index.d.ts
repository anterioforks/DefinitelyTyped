// Type definitions for ng-component-api 0.0
// Project: https://github.com/owen-it/ng-component-api
// Definitions by: Antério Vieira <https://github.com/anteriovieira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angular';

declare module 'angular' {
    export interface IModule {

        /**
         * Use this method to register components.
         *
         * @param components An Object of component type.
         *
         * @example
         *
         * import tab from './components/tab.ng'
         * angular.module('app').components({ tab })
         */
        components(components: {} ): IModule;
    }
}