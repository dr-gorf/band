'use strict'

require('../app.js').controller('header', ['$scope', '$timeout', function($scope, $timeout) {
  const phrases = [
    'Such Riff',
    'Many Playing',
    'Very Music',
    'Mmmm Notes',
    'Many Timing',
    'Amaze Guitar',
    'So Skill',
    'Much Mix',
    'Very Shred',
    'Such Listen'
  ]

  function reDoge() {
    var e = document.getElementById('doge-header'),
        r = e.getBoundingClientRect()

    // element not visible
    if (document.hidden === true || r.top + r.height <= 0 || !$scope.doge)
      $scope.doge = phrases[Math.floor(Math.random()*phrases.length)]
                            .toUpperCase()
                            .split(' ')

    $timeout(reDoge, 200)
  }

  reDoge()
}])
