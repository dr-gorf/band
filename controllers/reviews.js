require('../app.js')
  .controller('reviews', ['$scope', '$timeout', '$rootScope',
  ($scope, $timeout, $rootScope) => {
    function shuffle(a) {
      for (var i = a.length; i; --i) {
        var j = Math.floor(Math.random() * i);
        var x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
      return a;
    }

    // reviews
    $rootScope.where = '#complaints'
    $scope.reviews = shuffle([
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
    ])
    var i = 0, done = false
    function showReview() {
      if (done)
        return

      if (document.hidden === true) {
        $timeout(showReview, 1000)
      } else {
        if (++i == $scope.reviews.length) {
          shuffle($scope.reviews)
          i = 0
        }
        $scope.current = i
        $timeout(showReview, 4000)
      }
    }
    $scope.$on('$destroy', () => done = true)
    showReview()
  }])
