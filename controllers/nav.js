require('../app.js').controller('nav', ['$scope', function($scope) {
  $scope.links = [
    { href: '#home', text: 'home' },
    { href: '#music', text: 'music' },
    { href: '#band', text: 'the band' },
    { href: '#complaints', text: 'reviews' }
  ]
}])
