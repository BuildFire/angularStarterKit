
'use strict';

(function (angular, buildfire) {
  angular.module('angularStarterKitWidget', [])
    .config(['$compileProvider', function ($compileProvider) {

      /**
       * To make href urls safe on mobile
       */
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|cdvfile|file):/);
      
      /*
      * You can write your angular routes here. Just inject "ngRoute" dependency and you should be
      * ready to use routes just like we did in content section.
      */


    }])
    .controller('WidgetHomeCtrl', function(){
      var WidgetHome = this;
      WidgetHome.text = "Widget Section";
    });
})(window.angular, window.buildfire);
