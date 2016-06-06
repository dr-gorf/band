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

  var changed = false,
      doge = ['SUPPLE CONGRESS']
  function reDoge() {
    var e = document.getElementById('doge-target'),
        r = e.getBoundingClientRect(),
        sampleRate = 100,
        isHidden = document.hidden === true || r.top + r.height <= 0


    // element not visible
    if (!changed && (!$scope.doge || isHidden)) {
      let current = doge[0]
      while (current == doge[0]) {
        doge = phrases[Math.floor(Math.random()*phrases.length)]
                      .toUpperCase()
                      .split(' ')
      }

      $scope.doge = `${doge[0]} ${doge[1]}`
      console.log($scope.doge)
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
