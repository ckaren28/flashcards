app.controller('profileController', [$scope, $location, profileFactory, $routeParams, function($scope, $location, profileFactory, $routeParams){

//this is where the data for top collections will be stored.
$scope.topCollections = {};
//show the netflix scroll, this should show all top collections
  $scope.index = function(){
    userFactory.index(function(returned_Data){
      $scope.topCollections = returned_Data
    })
  }
  index();

/////////////////// Inside the profile page ///////////////////

//On top collection click
  $scope.show_collection = function(){
    userFactory.show_collection($routeParams.id, function(returned_data){
      $scope.collection = returned_data
      /// this is to go see my collection
      //$location.url('/')
    })
  }
//On 'add a collection' click, a pop up should allow you to add a new collection that directs to collection page.
  $scope.add_collection = function(){
    userFactory.add_collection(function(){
      $location.url('/profile')
    })
  }

  $scope.edit_collection = function(){
    userFactory.edit_collection($routeParams.id, function(){
      //
    })
  }
  $scope.remove_collection = function(){
    userFactory.remove_collection($routeParams.id, function(){
      //
    })
  }


//On see my collections click, show all collections created by user
  $scope.get_collection_by_user = function(){
    userFactory.get_collection_by_user($routeParams.id, function(){
      $location.url('/')
    })
  }
  ////////////// End -- Inside the profile page //////////////////


  ////////////// Inside the collection page //////////////////////

  //on start studying button click, show all collections by user on another page.



}]);
