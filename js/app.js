angular.module('theApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
        title: 'Home',
        templateUrl: 'views/home.html',
        controller: 'home'
      }).when('/music', {
        title: 'Music',
        templateUrl: 'views/music.html',
        controller: 'music'
      }).when('/band', {
        title: 'The Band',
        templateUrl: 'views/band.html',
        controller: 'band'
      }).when('/complaints', {
        title: 'Reviews',
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
        href: '#complaints',
        text: 'reviews'
      }
    ]
  }).controller('home', function($scope, $rootScope) {
    // home page
    $rootScope.home = true
    $rootScope.where = '#home'
    $scope.$on('$destroy', function() { $rootScope.home = false })
  }).controller('music', function($scope, $rootScope) {
    // discography
    $rootScope.where = '#music'
  }).controller('band', function($scope, $rootScope) {
    // the band page
    $rootScope.where = '#band'
  }).controller('reviews', function($scope, $timeout, $rootScope) {
    // reviews
    $rootScope.where = '#complaints'
    $scope.reviews = [
      'This is awful.',
      'You guys are making too much noise.',
      'The pirate song is ok, but that\'s about it.',
      'Stop.',
      'Did you record that on your phone?',
      'You\'re not doing it right.',
      'When you shaved your mustache on stage... it was magical.',
      'No - he doesn\'t get another one.',
      'You guys aren\'t just dorks. You\'re more than dorks. It\'s multifaceted.'
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
  }).run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if (current.$$route)
        $rootScope.title = current.$$route.title
    })
  })
