require('../app.js')
  .controller('music', ['$rootScope',
  ($rootScope) => $rootScope.where = '#music'
])
