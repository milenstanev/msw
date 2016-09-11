import angular from 'angular';
import 'angular-ui/ui-router';
import 'angular-sanitize';
import 'angular/bower-angular-animate';

import {
  componentConfig  // configure names .etc
} from './msw.config/component.config.js';

//region templates
/* angular-material */
import componentTemplate from './msw.templates/angular-material/template-material.js';

/* angular-strap */
// import componentTemplate from './msw.templates/angular-strap/template-bootstrap.js';
//endregion


const common = angular.module(`${componentConfig.NAMESPACE}.${componentConfig.COMPONENT_NAME}`, [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  componentTemplate.name
]);

export  {
  common, angular
};

//./node_modules/.bin/jspm bundle ./src/msw.common/common.js ./src/msw.common/common.dist.js --minify --inject
