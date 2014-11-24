'use strict';

var VDBApp = angular.module('VDBApp', [
	'ngRoute',
  'Controllers'

]);


VDBApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'myFirstCtrl'
      }).
      when('/item/:itemName', {
        templateUrl: 'partials/item-detail.html',
        controller: 'myFirstCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

