require('../app.js')
.controller('home', ['$scope', '$rootScope',
  ($scope, $rootScope) => {
    // home page
    $rootScope.home = true
    $rootScope.where = '#home'
    $scope.$on('$destroy', () => $rootScope.home = false)
  }])
