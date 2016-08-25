app.controller('profileController', ['$scope', '$location', 'profileFactory', '$cookies', function($scope, $location, profileFactory, $cookies){

  //this is where the data for top collections will be stored.
  $scope.topCollections = {};

  if($cookies.getObject('user')){
      $scope.user = $cookies.getObject('user')
    }else{
      $location.url('/')
    }
  //show the netflix scroll, this should show all top collections
  //**********************check**************
    var index = function(){
      collectionFactory.index($scope.user._id, function(returned_Data){
        $scope.topCollections = returned_Data
      })
    }
    index();
}]);
