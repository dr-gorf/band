angular.module('theApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'home'
      }).when('/music', {
        templateUrl: 'views/music.html',
        controller: 'music'
      }).when('/band', {
        templateUrl: 'views/band.html',
        controller: 'band'
      }).when('/reviews', {
        templateUrl: 'views/reviews.html',
        controller: 'reviews'
      }).otherwise({
        redirectTo: '/'
      })
  }).controller('nav', function($scope) {
    $scope.links = [
      {
        href: '#home',
        text: 'home'
      },
      {
        href: '#music',
        text: 'music'
      },
      {
        href: '#band',
        text: 'the band'
      },
      {
        href: '#reviews',
        text: 'reviews'
      }
    ]
  }).controller('home', function($scope, $location) {
    // home page
  }).controller('music', function($scope) {
    // discography
  }).controller('band', function($scope) {
    // the band page
  }).controller('reviews', function($scope, $timeout) {
    // reviews
    $scope.reviews = [
      'This is awful',
      'You guys are making too much noise',
      'The pirate song is ok, but that\'s about it',
      'Do you even know what a "groove" is?',
      'Stop.',
      'Did you record that on your phone?',
      'You\'re not doing it right'
      ]
    var i = 0
    var done = false
    console.log('started reviews controller');
    function showReview() {
      if (done)
        return
      var j = i
      while (j == i) {
        j = Math.floor(Math.random() * ($scope.reviews.length))
      }
      $scope.current = i = j
      $timeout(showReview, 4000)
    }
    $scope.$on('$destroy', function() { done = true })
    showReview()
  })
