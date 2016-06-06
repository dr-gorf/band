var angular = require('angular'),
    ngRoute = require('angular-route'),
    ngAnimate = require('angular-animate')

module.exports = angular.module('supple', [ngRoute, ngAnimate])
.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/', {
      title: 'Home',
      templateUrl: require('./views/home.html'),
      controller: 'home'
    }).when('/music', {
      title: 'Music',
      templateUrl: require('./views/music.html'),
      controller: 'music'
    }).when('/band', {
      title: 'The Band',
      templateUrl: require('./views/band.html'),
      controller: 'band'
    }).when('/complaints', {
      title: 'Reviews',
      templateUrl: require('./views/reviews.html'),
      controller: 'reviews'
    }).otherwise({
      redirectTo: '/'
    })
}])
.run(['$rootScope', '$route', ($rootScope) => $rootScope.$on('$routeChangeSuccess',
  (event, current, previous) => {
    if (current.$$route)
      $rootScope.title = current.$$route.title
  })
])
