app.controller('profileController', [$scope, $location, profileFactory, $routeParams, function($scope, $location, profileFactory, $routeParams){

//this is where the data for top collections will be stored.
$scope.topCollections = {};
//show the netflix scroll... so this should show all top collections from Database.
$scope.index = function(){
  userFactory.index(function(returned_Data){
    $scope.topCollections = returned_Data
  })
}
index();

    ////////////// Inside the profile page ///////////////////

//On top collection click (needs id)
  $scope.show_collection = function(){
    userFactory.show_collection($routeParams.id, function(){
      /// this is to go see my collection
      //$location.url('/')
    })
  }
//On  'add a collection' click, a pop up should allow you to add a new collection that
// directs to collection page.
  $scope.add_collection = function(){
    userFactory.add_collection($routeParams.id, function(){

    })
  }
//on see my collections click, show all collections by user on another page.
  $scope.get_collection_by_user = function(){
    userFactory.get_collection_by_user(function(){

    })
  }
  ////////////// End -- Inside the profile page //////////////////



  ////////////// Inside the collection page //////////////////////

  //on start studying button click, show all collections by user on another page.



}]);
