app.controller('profileController', [$scope, $location, profileFactory, function($scope, $location,profileFactory){

//this is where the data for top collections will be stored.
$scope.topCollections = {};
//show the netflix scroll... so this should show all top collections from Database.
$scope.index = function(){
  userFactory.index(function(returnedData){
    $scope.topCollections = returnedData
  })
}

//On top collection click
//will need to comeup with method name
  $scope.____ = function(){
    userFactory.___(____, function(){
      /// this is to go see my collection
      //$location.url('/')
    })
  }

}]);
