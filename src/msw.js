import {
  common, angular
} from './msw.common.js';

//region msw.core
import mswCore from '../lib/msw.core/index.js';
//import mswCore from '../lib/msw.core/dist/core.dist.js';
//import mswCore from 'milenstanev-msw.core';
//endregion

//region msw.layout
import mswLayout from '../lib/msw.layout/index.js';
//import mswCore from '../lib/msw.layout/dist/core.dist.js';
//import mswCore from 'milenstanev-msw.layout';
//endregion

import test from './components/test.component/test.js';

import {
  componentRoutes, // routes
  componentConfig  // configure names .etc
} from './msw.config/component.config.js';
import ComponentSvc from './msw.Svc.js';
import ComponentCtrl from './msw.Ctrl.js';
import ComponentDirective from './msw.Directive.js';
import componentTemplate from './msw.templates/msw.templates.js';

/**
 * @desc Angular module name: prefix.component, description: desc
 * @type {angular.Module} AngularModule
 *
 * @param {string} [name] - Module name
 * @param {Array} [dependencies] - Module decencies
 *
 * @example usage with directive: <div prefix-component></div>
 * @example usage with controller/template: <div ng-controller="ComponentCtrl as ctrl" ng-include="'componentHtml'"></div>
 *
 * @property {angular.Module#constant} componentSettings - Module settings
 * @property {angular.Module#run}  - Load template dependencies
 * @property {angular.Module#config} - Doing routes, resolve services .etc
 * @property {angular.Module#controller} componentCtrl - Define module controller
 * @property {angular.Module#service} componentSvc - Define module services
 * @property {angular.Module#directive} prefix-component - Define directive which can present the module view
 * @info TODO: change it somehow
 *  - The {cost} to which is assigned module instance is not good practice according good practices from @url https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules,
 *    but otherwise we will lose documentation
 */
const component = angular.module(`${componentConfig.NAMESPACE}.${componentConfig.COMPONENT_NAME}`, [
  common.name,
  componentTemplate.name
  , mswCore.name
  , mswLayout.name
  , test.name
]);

/**
 * @desc Doing overwrite/setting about UI.
 * @type {string}
 */
component.constant(componentConfig.COMPONENT_CONFIG_NAME, componentConfig);

component.config(componentRoutes);

component.controller(componentConfig.CONTROLLER_NAME, ComponentCtrl);

component.service(componentConfig.SERVICE_NAME, ComponentSvc);

component.directive(componentConfig.DIRECTIVE_NAME_CAPS, [
  () => {
    return new ComponentDirective();
  }
]);

angular.bootstrap(document.body, [
  component.name
]);

export default component;

