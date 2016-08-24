app.controller('profileController', [$scope, $location, profileFactory, function($scope, $location, profileFactory){

  //this is where the data for top collections will be stored.
  $scope.topCollections = {};
  //show the netflix scroll, this should show all top collections
  //**********************check**************
    var index = function(){
      collectionFactory.index($req.body._id, function(returned_Data){
        $scope.topCollections = returned_Data
      })
    }
    index();
}]);
