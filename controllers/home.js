require('../app.js')
.controller('home', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    // home page
    $rootScope.home = true
    $rootScope.where = '#home'
    $scope.$on('$destroy', () => $rootScope.home = false)
  }])
