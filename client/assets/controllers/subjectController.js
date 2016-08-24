app.controller('profileController', [$scope, $location, profileFactory, $routeParams, function($scope, $location, profileFactory, $routeParams){

//this is where the data for top collections will be stored.
$scope.topCollections = {};
//show the netflix scroll... so this should show all top collections from Database.
$scope.index = function(){
  userFactory.index(function(returned_Data){
    $scope.topCollections = returned_Data.data
  })
}
index()

//On a subject click (needs id)
$scope.show_subject = function(){
  userFactory.show_subject($routeParams.id, function(){
    /// this goes to the subject page
    //$location.url('/subjectpage')
  })
}


}]);
