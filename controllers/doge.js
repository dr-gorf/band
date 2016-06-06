'use strict'

require('../app.js').controller('doge', ['$scope', '$timeout', function($scope, $timeout) {
  const phrases = [
    'Such Riff',
    'Many Playing',
    'Very Music',
    'Mmmm Creamy',
    'Many Timing',
    'Amaze Guitar',
    'So Mixing',
    'Much Loud',
    'Very Shred',
    'Such Listen',
    'Wow Singing',
    'Creamy Beige',
    'Funky Priest',
  ]

  var changed = false
  function reDoge() {
    var e = document.getElementById('doge-target'),
        r = e.getBoundingClientRect(),
        sampleRate = 100,
        isHidden = document.hidden === true || r.top + r.height <= 0


    // element not visible
    if (!changed && (isHidden || !$scope.doge)) {
      let current = $scope.doge ? $scope.doge[0] : ''
      while (!$scope.doge || current == $scope.doge[0]) {
        $scope.doge = phrases[Math.floor(Math.random()*phrases.length)]
                              .toUpperCase()
                              .split(' ')
      }
      
      changed = true
    } else {
      sampleRate = 500
      if (!isHidden)
        changed = false
    }

    $timeout(reDoge, sampleRate)
  }

  reDoge()
}])
