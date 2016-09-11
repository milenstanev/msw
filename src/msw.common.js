import angular from 'angular';
import 'angular-ui/ui-router';
import 'angular-sanitize';
import 'angular/bower-angular-animate';

//region templates
/* angular-material */
// import 'angular-material';

/* angular-strap */
import 'twbs/bootstrap/css/bootstrap.css!';
import 'mgcrea/angular-strap';
//endregion


const common = angular.module('msw.common', [
  'ui.router',
  'ngSanitize',
  'ngAnimate'
  //,'ngMaterial' // Material
  ,'mgcrea.ngStrap' // AngularStrap
]);

export  {
  common, angular
};

//./node_modules/.bin/jspm bundle ./src/msw.common/common.js ./src/msw.common/common.dist.js --minify --inject
