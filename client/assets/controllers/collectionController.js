app.controller('profileController', [$scope, $location, collectionFactory, $routeParams, function($scope, $location, collectionFactory, $routeParams){

/////////////////// Inside the profile page ///////////////////

//On top collection click, this is to go see my collection
$scope.collection = {};

  $scope.show_collection = function(){
    collectionFactory.show_collection($routeParams.id, function(returned_data){
      $scope.collection = returned_data
      $location.url('/collections')
    })
  }
//On 'add a collection' click, a pop up should allow you to add a new collection that directs to collection page.
  $scope.add_collection = function(){
    collectionFactory.add_collection(function(){
      $location.url('/collections')
    })
  }

  $scope.edit_collection = function(){
    collectionFactory.edit_collection($routeParams.id, function(){
      //
    })
  }
  $scope.remove_collection = function(){
    collectionFactory.remove_collection($routeParams.id, function(){
      //
    })
  }

//On see my collections click, show all collections created by user
  $scope.get_collection_by_user = function(){
    collectionFactory.get_collection_by_user($routeParams.id, function(){
      $location.url('/')
    })
  }
  ////////////// End -- Inside the profile page //////////////////


  ////////////// Inside the collection page //////////////////////

  //on start studying button click, show all collections by user on another page.



}]);
