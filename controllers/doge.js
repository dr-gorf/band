'use strict'

require('../app.js').controller('doge', ['$scope', '$timeout', function($scope, $timeout) {
  const phrases = [
    'Such Riff',
    'Many Playing',
    'Very Music',
    'Mmmm',
    'Many Funk',
    'Amaze Guitar',
    'So Mixing',
    'Much Loud',
    'Very Shred',
    'Such Listen',
    'Wow',
    'Hot Doge',
    'Now With Sound'
  ]

  var changed = false,
      doge = '.'

  function reDoge() {
    var e = document.getElementById('doge-target'),
        r = e.getBoundingClientRect(),
        sampleRate = 100,
        isHidden = document.hidden === true || r.top + r.height <= 0


    // element not visible
    if (!changed && (!$scope.doge || isHidden)) {
      let    current =  doge.split(' ')[0]
      while (current == doge.split(' ')[0])
        doge = phrases[Math.floor(Math.random()*phrases.length)]

      $scope.doge = doge
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
