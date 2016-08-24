app.controller('profileController', [$scope, $location, profileFactory, function($scope, $location, profileFactory){

//this is where the data for top collections will be stored.
$scope.topCollections = {};
//show the netflix scroll... so this should show all top collections from Database.
$scope.index = function(){
  userFactory.index(function(returned_Data){
    $scope.topCollections = returned_Data.data
  })
}

//On a subject click (needs id)
$scope.show_subject = function(){
  userFactory.show_subject(function(){
    /// this goes to the subject page
    //$location.url('/')
  })
}


}]);
