'use strict';

(function (angular,buildfire) {
  angular.module('angularStarterKitContent', ['ngRoute'])
  //injected ngRoute for routing
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/home.html'
        })
        .when('/view', {
          templateUrl: 'templates/view.html'
        })
        .otherwise('/');
    }]);
  
  /* We can use angular controllers to write all the logical implementation we want inside a view. We can use several
  * buildfire apis easily like carousel, dynamic links, WYSIWYG etc.
  * All your angular components can be used here as it is like filters, directives, factory etc.. 
  */
})(window.angular, window.buildfire);
