app.controller('profileController', [$scope, $location, subjectFactory, $routeParams, function($scope, $location, subjectFactory, $routeParams){

//this is where the data for top collections will be stored.
$scope.topCollections = {};
//show the netflix scroll... so this should show all top collections from Database.
$scope.index = function(){
  subjectFactory.index($routeParams.id, function(returned_Data){
    $scope.topCollections = returned_Data.data
    $location.url('/subject')
  })
}
index()

$scope.subject = {}
//On a subject click (needs id)
$scope.show_subject = function(){
  subjectFactory.show_subject($routeParams.id, function(returned_data){
    $scope.subject = returned_data
    $location.url('/subject')
  })
}


}]);
