app.controller('collectionController', ['$scope', '$location', 'collectionFactory', '$routeParams', '$cookies', function($scope, $location, collectionFactory, $routeParams, $cookies){

/////////////////// Inside the profile page ///////////////////

//On top collection click, this is to go see my collection
$scope.collection = {};

  $scope.show_collection = function(){
    collectionFactory.show_collection($routeParams.id, function(returned_data){
      $scope.collection = returned_data
      console.log($scope.collection);
    })
  }
$scope.show_collection();

    $scope.addcard = function(){
        $location.url('/addcard/'+ $scope.collection._id)
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
  console.log($scope.collection);

  $scope.startcard = function(){
      console.log($scope.collection);
      $location.url('/card/'+ $scope.collection._notecards[0]._id)
  }
  ////////////// End -- Inside the profile page //////////////////


  ////////////// Inside the collection page //////////////////////

  //on start studying button click, show all collections by user on another page.



}]);
