app.controller('userController', [$scope, $location, userFactory, function($scope, $location, userFactory){

  $scope.create = function(){
    // will need to insert the method name
    userFactory.create($scope.----, function(){
      //do we want to send user to profile page after login?
      //$location.url('/')
    })
  }

  $scope.login = function(){
    // will need to insert the method name
    userFactory.login($scope.----, function(){
      //$location.url('/')

    })
  }


}]);
