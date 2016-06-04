Array.prototype.shuffle = function() {
 for (var i = this.length; i; --i) {
    var j = Math.floor(Math.random() * i);
    var x = this[i - 1];
    this[i - 1] = this[j];
    this[j] = x;
  }
  return this;
}

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
  }).controller('header', function($scope, $timeout) {
      var phrases = [
          'Such Riff',
          'Many Instrument',
          'Very Music',
          'Mmmm Notes',
          'Many Timing',
          'Amaze Guitar',
          'So Skill',
          'Much EQ',
          'Very Shred',
      ]

      $scope.doge = ['SUPPLE', 'CONGRESS']

      function reDoge() {
          var e = document.getElementById('doge-header'),
              r = e.getBoundingClientRect()

          // element not visible
          if (document.hidden === true || r.top + r.height <= 0)
              $scope.doge = phrases[Math.floor(Math.random()*phrases.length)]
                                    .toUpperCase()
                                    .split(' ')

          $timeout(reDoge, 200)
      }

      reDoge()
  })
  .controller('nav', function($scope) {
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
}).controller('band', function($scope, $rootScope, $timeout) {
    // the band page
    $rootScope.where = '#band'
  }).controller('reviews', function($scope, $timeout, $rootScope) {
    // reviews
    $rootScope.where = '#complaints'
    $scope.reviews = [
      "This is awful.",
      "You guys are making too much noise.",
      "The pirate song is ok, but that's about it.",
      "Stop.",
      "Did you record that on your phone?",
      "You're not doing it right.",
      "When you shaved your mustache on stage... it was magical.",
      "I have been spending a lot of money on breakaway clothes...",
      "You aren't just dorks. You're more than dorks. It's multifaceted.",
      "I heard of this vacation spot you should go to – Hell. You should go to Hell."
    ].shuffle()
    var i = 0
    var done = false
    function showReview() {
      if (done)
        return

      if (document.hidden === true) {
        $timeout(showReview, 1000)
      } else {
        if (++i == $scope.reviews.length) {
          $scope.reviews.shuffle()
          i = 0
        }
        $scope.current = i
        $timeout(showReview, 4000)
      }
    }
    $scope.$on('$destroy', function() { done = true })
    showReview()
  }).run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      if (current.$$route)
        $rootScope.title = current.$$route.title
    })
  })
