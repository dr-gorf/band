require('../app.js').controller('nav', ['$scope', ($scope) =>
  $scope.links = [
    { href: '#home', text: 'home' },
    { href: '#music', text: 'music' },
    { href: '#band', text: 'the band' },
    { href: '#complaints', text: 'reviews' }
  ]
])
