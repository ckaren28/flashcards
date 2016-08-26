app.controller('subjectController', ['$scope', '$location', 'subjectFactory', '$routeParams', '$cookies', function($scope, $location, subjectFactory, $routeParams, $cookies){

$scope.subject = {}
$scope.user = {}

if($cookies.getObject('user')){
	$scope.user = $cookies.getObject('user')
}
else{
	$location.url('/')
}

$scope.get_subject = function(){
  subjectFactory.show_subject($routeParams.id, function(data){
  	$scope.subject = data
	console.log($scope.subject);

  })
}
$scope.index = function(){
	subjectFactory.index($scope.user._id, function(returned_Data){
	  $scope.user = returned_Data
	})
}

$scope.add_to_top = function(id){
	for(var i = 0; i < $scope.user._topcollections.length;i++){
      if($scope.user._topcollections[i]._id == id){
        return;
      }
    }
    $scope.body = {}
    $scope.body._user = $scope.user._id
    $scope.body._collection = id
    subjectFactory.add_to_top($scope.body,function(){
      $location.url('/profile/' + $scope.user._id)
    })
}
$scope.get_subject();
$scope.index();


// $scope.remove_subject = function(){
//
// }





}]);
