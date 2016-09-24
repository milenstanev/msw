import {
  common, angular
} from '../../msw.common.js';

import html from './test.html!text'

const test = angular.module('msw.test', [
  common.name
]);


test.run([
  'NavigationSvc', (NavigationSvc) => {
    NavigationSvc.addButton('Test', '/test', 'asd');
  }
])

test.config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider
      .state('test', {
        url: '/test',
        template: html,
        controller: () => {}
      });
  }
]);

export default test;
