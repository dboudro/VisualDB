'use strict';

var VDBApp = angular.module('VDBApp', [
	'ngRoute',
  'Controllers'

]);


VDBApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/item-list.html',
        controller: 'myFirstCtrl'
      }).
      when('/items/:itemID', {
        templateUrl: 'partials/item-detail.html',
        controller: 'myFirstCtrl'
      }).

      otherwise({
        redirectTo: '/nothing'
      });
  }]);

